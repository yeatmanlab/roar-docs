# ROAR-Firekit Assessment Methods Analysis

## Overview
This document provides a comprehensive analysis of all assessment-related methods in `firekit.ts` and supporting classes (`RoarAppkit`, `RoarRun`, `RoarTaskVariant`). These methods are used by the dashboard frontend for assessment operations including run lifecycle management, score recording, assignment state management, and task/variant fetching.

---

## Table of Contents
1. [Run Lifecycle Methods](#run-lifecycle-methods)
2. [Score Recording & Retrieval](#score-recording--retrieval)
3. [Assignment State Management](#assignment-state-management)
4. [Task/Variant Fetching](#taskvariant-fetching)
5. [Real-time Listeners](#real-time-listeners)
6. [Supporting Methods](#supporting-methods)

---

## Run Lifecycle Methods

### 1. RoarAppkit.startRun()
**Method Path:** `roarfirekit.startAssessment()` → `RoarAppkit.startRun()`

**Description:** Initializes a new assessment run by creating a run document in Firestore and recording initial metadata.

**Parameters:**
- `additionalRunMetadata?: { [key: string]: unknown }` - Optional metadata to include with the run

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Writes:** Creates document in `users/{userId}/runs/{runId}`
- **Reads:** Fetches user document to validate existence and retrieve user metadata (grade, assessmentPid, birthMonth, birthYear, schoolLevel)
- **Updates:** Updates user document to add taskId and variantId to arrays

**Called From:**
- Assessment initialization flow in dashboard
- `RoarAppkit._init()` method setup

**Backend Equivalent:**
- **SDK Command:** `sdk.startRun()`
- **REST API:** `POST /assessments/{assessmentId}/runs`
- **Payload:** Run metadata, user info, task/variant IDs, org assignments

**Notes:**
- Validates user existence before creating run
- Propagates testData/demoData flags from user and task to run
- Performs org intersection to ensure user belongs to assigned orgs
- Sets `completed: false`, `reliable: false` initially
- Records `timeStarted` server timestamp

---

### 2. RoarRun.finishRun()
**Method Path:** `roarfirekit.completeAssessment()` → `RoarRun.finishRun()`

**Description:** Marks a run as complete and records completion metadata.

**Parameters:**
- `finishingMetaData?: { [key: string]: unknown }` - Optional metadata to include when marking complete (default: `{}`)

**Return Type:** `Promise<boolean | undefined>`

**Firestore Operations:**
- **Updates:** Sets `completed: true` and `timeFinished: serverTimestamp()` on run document
- **Updates:** Updates user document `lastUpdated` timestamp

**Called From:**
- End of assessment in dashboard
- jsPsych `on_finish` callback

**Backend Equivalent:**
- **SDK Command:** `sdk.finishRun()`
- **REST API:** `PATCH /assessments/{assessmentId}/runs/{runId}`
- **Payload:** `{ completed: true, timeFinished: timestamp, ...finishingMetaData }`

**Notes:**
- Throws error if run not started
- Does not execute if run is aborted
- Updates user's lastUpdated timestamp for tracking

---

### 3. RoarRun.abortRun()
**Method Path:** `roarfirekit.completeAssessment()` → `RoarRun.abortRun()`

**Description:** Prevents further writes to a run by setting abort flag.

**Parameters:** None

**Return Type:** `void`

**Firestore Operations:** None (client-side only)

**Called From:**
- Error handling in assessment flow
- User cancellation scenarios

**Backend Equivalent:**
- **SDK Command:** `sdk.abortRun()`
- **REST API:** `PATCH /assessments/{assessmentId}/runs/{runId}` with `{ aborted: true }`

**Notes:**
- Client-side only; does not write to Firestore immediately
- Prevents subsequent `writeTrial()` calls from executing
- Throws error if run not started

---

## Score Recording & Retrieval

### 4. RoarRun.writeTrial()
**Method Path:** `roarfirekit.writeTrial()` → `RoarRun.writeTrial()`

**Description:** Records a single trial response and updates run scores based on correctness and ability estimates.

**Parameters:**
- `trialData: TrialData` - Trial data object with required fields:
  - `assessment_stage: string` - "practice_response" or "test_response"
  - `correct: boolean` - Whether response was correct
  - `subtask?: string` - Optional subtask identifier
  - `thetaEstimate?: number | null` - IRT ability estimate
  - `thetaSE?: number | null` - Standard error of ability estimate
  - `thetas?: { [key: string]: number | null }` - Per-subtask ability estimates
  - `thetaSEs?: { [key: string]: number | null }` - Per-subtask standard errors
  - `[key: string]: unknown` - Additional trial data
- `computedScoreCallback?: (rawScores: RawScores) => Promise<ComputedScores>` - Optional callback to compute derived scores

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Creates:** New trial document in `users/{userId}/runs/{runId}/trials/{trialId}`
- **Updates:** Run document with:
  - `scores.raw.{subtask}.{stage}.*` - Raw score metrics (numAttempted, numCorrect, numIncorrect, thetaEstimate, thetaSE)
  - `scores.computed.*` - Computed/derived scores
  - `interactions.{stage}.*` - Interaction counters per assessment stage
- **Updates:** Trial document with interaction data (blur, focus, fullscreen events)

**Called From:**
- jsPsych trial `on_finish` callbacks
- `on_data_update` callbacks in assessment

**Backend Equivalent:**
- **SDK Command:** `sdk.recordTrial(trialData, computedScoreCallback)`
- **REST API:** `POST /assessments/{assessmentId}/runs/{runId}/trials`
- **Payload:** Trial data with computed scores

**Notes:**
- Validates required fields (`assessment_stage`, `correct`)
- Converts URL objects to strings for Firestore compatibility
- Supports multi-subtask assessments (e.g., ROAR-PA with FSM, LSM, DEL)
- Default subtask is "composite" if not specified
- Automatically computes scores if no callback provided (numCorrect - numIncorrect)
- Resets interaction tracking after each trial
- Throws error if run not started or aborted

---

### 5. RoarRun.addInteraction()
**Method Path:** `roarfirekit.addInteraction()` → `RoarRun.addInteraction()`

**Description:** Records user interaction events (blur, focus, fullscreen) during a trial.

**Parameters:**
- `interaction: InteractionEvent` - Event object with:
  - `event: 'blur' | 'focus' | 'fullscreenenter' | 'fullscreenexit'`
  - `trial: number` - Trial number
  - `time: number` - Timestamp of event

**Return Type:** `void`

**Firestore Operations:** None (client-side accumulation only; written via `writeInteractions()`)

**Called From:**
- Window blur/focus event listeners
- Fullscreen API event listeners

**Backend Equivalent:**
- **SDK Command:** `sdk.addInteraction(event)`
- **REST API:** Batch recorded via trial write

**Notes:**
- Accumulates interaction data in memory
- Data persisted to Firestore when `writeTrial()` is called
- Tracks both trial-level and run-level interaction counts
- Run-level counts are incremented per assessment stage

---

### 6. RoarRun.writeInteractions()
**Method Path:** `RoarRun.writeTrial()` → `RoarRun.writeInteractions()`

**Description:** Persists accumulated interaction data to Firestore for a trial and updates run-level counters.

**Parameters:**
- `assessmentStage: string` - Current assessment stage (e.g., "practice", "test")
- `trialDocRef: DocumentReference` - Reference to trial document

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** Trial document with `interaction_blur`, `interaction_focus`, `interaction_fullscreenenter`, `interaction_fullscreenexit` arrays
- **Updates:** Run document with `interactions.{stage}.{eventType}` counters

**Called From:**
- `RoarRun.writeTrial()` after trial creation

**Backend Equivalent:**
- **SDK Command:** Automatic via `sdk.recordTrial()`
- **REST API:** Included in trial write payload

**Notes:**
- Renames interaction keys (e.g., `blur` → `interaction_blur`)
- Only increments run counters if interaction occurred during trial
- Resets trial-level interaction tracking after write

---

## Assignment State Management

### 7. RoarFirekit.startAssignment()
**Method Path:** `roarfirekit.startAssignment()`

**Description:** Marks an assignment as started for a user.

**Parameters:**
- `administrationId: string` - ID of the administration/assignment
- `transaction?: Transaction` - Optional Firestore transaction
- `targetUid?: string` - Optional target user UID (for admin spoofing)

**Return Type:** `Promise<void | Transaction>`

**Firestore Operations:**
- **Updates:** `users/{userId}/assignments/{administrationId}` with `{ started: true }`

**Called From:**
- `startAssessment()` when first assessment in assignment is started
- Admin dashboard when starting assignment for user

**Backend Equivalent:**
- **SDK Command:** `sdk.startAssignment(administrationId)`
- **REST API:** `PATCH /assignments/{administrationId}` with `{ started: true }`

**Notes:**
- Can be executed within a transaction for atomicity
- Supports admin spoofing via `targetUid` parameter
- Only marks assignment started if no assessments have been started yet

---

### 8. RoarFirekit.completeAssignment()
**Method Path:** `roarfirekit.completeAssignment()`

**Description:** Marks an assignment as completed for a user.

**Parameters:**
- `administrationId: string` - ID of the administration/assignment
- `transaction?: Transaction` - Optional Firestore transaction

**Return Type:** `Promise<void | Transaction>`

**Firestore Operations:**
- **Updates:** `users/{userId}/assignments/{administrationId}` with `{ completed: true }`

**Called From:**
- `completeAssessment()` when all assessments in assignment are completed
- Admin dashboard

**Backend Equivalent:**
- **SDK Command:** `sdk.completeAssignment(administrationId)`
- **REST API:** `PATCH /assignments/{administrationId}` with `{ completed: true }`

**Notes:**
- Can be executed within a transaction
- Only called when all required assessments are complete

---

### 9. RoarFirekit.startAssessment()
**Method Path:** `roarfirekit.startAssessment()`

**Description:** Initializes an assessment within an assignment, fetches task/variant data, and returns a configured RoarAppkit instance.

**Parameters:**
- `administrationId: string` - ID of the administration
- `taskId: string` - ID of the task to start
- `taskVersion: string` - Version of the task
- `targetUid?: string` - Optional target user UID (for admin spoofing)

**Return Type:** `Promise<RoarAppkit>`

**Firestore Operations:**
- **Reads:** Assignment document to get assessment params and org assignments
- **Reads:** Task and variant documents via `getTaskAndVariant()`
- **Updates:** Assessment within assignment with `startedOn: new Date()`
- **Updates:** Assignment with `started: true` if first assessment
- **Reads:** User data via `getMyData()` for assessment context

**Called From:**
- Dashboard when user clicks to start an assessment
- Admin interface to start assessment for user

**Backend Equivalent:**
- **SDK Command:** `sdk.startAssessment(administrationId, taskId, taskVersion)`
- **REST API:** `POST /assignments/{administrationId}/assessments/{taskId}/start`
- **Response:** Assessment context with task/variant info and RoarAppkit equivalent

**Notes:**
- Executes within a transaction for consistency
- Fetches task/variant based on assignment params
- Supports admin spoofing via `targetUid`
- Returns fully configured RoarAppkit ready for assessment
- Validates task and variant existence before returning

---

### 10. RoarFirekit.completeAssessment()
**Method Path:** `roarfirekit.completeAssessment()`

**Description:** Marks an assessment as completed and checks if entire assignment is complete.

**Parameters:**
- `administrationId: string` - ID of the administration
- `taskId: string` - ID of the task being completed
- `targetUid?: string` - Optional target user UID (for admin spoofing)

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** Assessment within assignment with `completedOn: new Date()`
- **Updates:** Assignment with `completed: true` if all assessments complete

**Called From:**
- `RoarAppkit.finishRun()` completion handler
- Dashboard assessment completion flow

**Backend Equivalent:**
- **SDK Command:** `sdk.completeAssessment(administrationId, taskId)`
- **REST API:** `PATCH /assignments/{administrationId}/assessments/{taskId}` with `{ completed: true }`

**Notes:**
- Executes within a transaction
- Checks if all required assessments are complete before marking assignment complete
- Accounts for optional assessments in completion check
- Supports admin spoofing

---

### 11. RoarFirekit.updateAssessmentRewardShown()
**Method Path:** `roarfirekit.updateAssessmentRewardShown()`

**Description:** Records that a reward/completion screen was shown to the user for an assessment.

**Parameters:**
- `administrationId: string` - ID of the administration
- `taskId: string` - ID of the task

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** Assessment within assignment with `rewardShown: true`

**Called From:**
- Assessment completion screen display logic

**Backend Equivalent:**
- **SDK Command:** `sdk.updateAssessmentRewardShown(administrationId, taskId)`
- **REST API:** `PATCH /assignments/{administrationId}/assessments/{taskId}` with `{ rewardShown: true }`

**Notes:**
- Executes within a transaction
- Used for tracking user engagement metrics

---

## Task/Variant Fetching

### 12. getTaskAndVariant()
**Method Path:** `getTaskAndVariant()` (from `firestore/query-assessment.ts`)

**Description:** Fetches a task and its variant based on variant parameters.

**Parameters:**
- `db: Firestore` - Firestore instance
- `taskId: string` - ID of the task
- `variantParams: { [key: string]: unknown }` - Parameters to match variant

**Return Type:** `Promise<{ task?: DocumentData; variant?: DocumentData }>`

**Firestore Operations:**
- **Reads:** Task document from `tasks/{taskId}`
- **Queries:** Variants collection with `where('params', '==', variantParams)` and `limit(1)`

**Called From:**
- `startAssessment()` to fetch task/variant for assessment
- Assessment initialization

**Backend Equivalent:**
- **SDK Command:** `sdk.getTaskAndVariant(taskId, variantParams)`
- **REST API:** `GET /tasks/{taskId}/variants?params={variantParams}`

**Notes:**
- Returns undefined if task or variant not found
- Matches variant by exact parameter equality
- Used to retrieve task metadata and variant-specific configuration

---

### 13. RoarTaskVariant.toFirestore()
**Method Path:** `RoarTaskVariant.toFirestore()`

**Description:** Persists task and variant data to Firestore, creating or updating as needed.

**Parameters:** None

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Writes:** Task document to `tasks/{taskId}` with merge
- **Queries:** Variants collection for existing variant with matching params
- **Updates:** Existing variant if found (updates description and lastUpdated)
- **Creates:** New variant document if not found

**Called From:**
- `RoarRun.startRun()` if variant not yet persisted
- Task registration flow

**Backend Equivalent:**
- **SDK Command:** `sdk.registerTask(taskInfo)`
- **REST API:** `POST /tasks` or `PATCH /tasks/{taskId}`

**Notes:**
- Idempotent: safe to call multiple times
- Searches for existing variant by params to avoid duplicates
- Supports testData and demoData flags
- Records lastUpdated timestamp

---

## Real-time Listeners

### 14. RoarFirekit._listenToClaims()
**Method Path:** `roarfirekit._listenToClaims()`

**Description:** Sets up real-time listener for user's custom claims (admin orgs, super admin status).

**Parameters:**
- `firekit: FirebaseProject` - Firebase project instance

**Return Type:** `Unsubscribe` - Function to stop listening

**Firestore Operations:**
- **Listens:** `userClaims/{userId}` document for changes
- **Reads:** Custom claims data (adminOrgs, super_admin, admin)

**Called From:**
- `init()` when admin user authenticates
- Authentication state change handler

**Backend Equivalent:**
- **SDK Command:** `sdk.onAdminClaimsChanged(callback)`
- **REST API:** WebSocket subscription to `/userClaims/{userId}`

**Notes:**
- Real-time listener; updates whenever claims change
- Refreshes ID token when claims are updated
- Supports Levante-specific admin flag
- Calls `listenerUpdateCallback` on changes

---

### 15. RoarFirekit._listenToTokenChange()
**Method Path:** `roarfirekit._listenToTokenChange()`

**Description:** Sets up real-time listener for ID token changes.

**Parameters:**
- `firekit: FirebaseProject` - Firebase project instance
- `_type: 'admin' | 'app'` - Type of Firebase project

**Return Type:** `Unsubscribe` - Function to stop listening

**Firestore Operations:** None (Firebase Auth listener)

**Called From:**
- `init()` for both admin and app Firebase projects
- Authentication state change handlers

**Backend Equivalent:**
- **SDK Command:** `sdk.onTokenRefresh(callback)`
- **REST API:** Firebase Auth token refresh mechanism

**Notes:**
- Automatically updates internal token cache
- Called whenever ID token is refreshed
- Triggers `listenerUpdateCallback` on token update

---

## Supporting Methods

### 16. RoarFirekit.getMyData()
**Method Path:** `roarfirekit.getMyData()`

**Description:** Fetches current user's data from admin database and prepares it for assessment context.

**Parameters:**
- `targetUid?: string` - Optional target user UID (for admin spoofing)

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Reads:** User document from `users/{userId}`
- **Reads:** External data subcollection from `users/{userId}/externalData/*`

**Called From:**
- `startAssessment()` to prepare user context
- Dashboard initialization

**Backend Equivalent:**
- **SDK Command:** `sdk.getMyData()`
- **REST API:** `GET /users/me` or `GET /users/{userId}`

**Notes:**
- Populates `roarAppUserInfo` for RoarAppkit initialization
- Supports admin spoofing via `targetUid`
- Generates assessmentPid from email if not set
- Caches user data for assessment context

---

### 17. RoarFirekit.getTasksDictionary()
**Method Path:** `roarfirekit.getTasksDictionary()`

**Description:** Fetches all available tasks as a dictionary.

**Parameters:** None

**Return Type:** `Promise<Record<string, object>>`

**Firestore Operations:**
- **Reads:** All documents from `tasks` collection

**Called From:**
- Dashboard task selection/display
- Assessment initialization

**Backend Equivalent:**
- **SDK Command:** `sdk.getTasksDictionary()`
- **REST API:** `GET /tasks`

**Notes:**
- Returns map with task IDs as keys
- Used for task metadata display

---

### 18. RoarFirekit.getAdministrations()
**Method Path:** `roarfirekit.getAdministrations()`

**Description:** Fetches available administrations (assignments) for the user.

**Parameters:**
- `testData: boolean` - Include test data administrations
- `restrictToOpenAdministrations: boolean` - Only open administrations

**Return Type:** `Promise<unknown[]>`

**Firestore Operations:**
- **Cloud Function:** Calls `getAdministrations` cloud function

**Called From:**
- Dashboard to display available assignments

**Backend Equivalent:**
- **SDK Command:** `sdk.getAdministrations({ testData, restrictToOpenAdministrations })`
- **REST API:** `GET /administrations?testData={bool}&openOnly={bool}`

**Notes:**
- Uses cloud function for permission-based filtering
- Respects user's org assignments

---

### 19. RoarAppkit.updateUser()
**Method Path:** `roarfirekit.updateUser()` → `RoarAppkit.updateUser()`

**Description:** Updates user metadata in both admin and assessment databases.

**Parameters:**
- `tasks?: string[]` - Task IDs to add
- `variants?: string[]` - Variant IDs to add
- `assessmentPid?: string` - Assessment PID (guest users only)
- `...userMetadata` - Additional metadata

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** User document in assessment database with task/variant arrays
- **Updates:** User document in admin database (guest users only)

**Called From:**
- Assessment initialization
- User profile updates

**Backend Equivalent:**
- **SDK Command:** `sdk.updateUser({ tasks, variants, assessmentPid, ...metadata })`
- **REST API:** `PATCH /users/me` with metadata

**Notes:**
- Uses arrayUnion to avoid duplicates
- Guest users can update assessmentPid
- Updates lastUpdated timestamp

---

### 20. RoarAppkit.addEngagementFlags()
**Method Path:** `roarfirekit.updateEngagementFlags()` → `RoarAppkit.addEngagementFlags()`

**Description:** Records engagement quality flags and reliability assessment for a run.

**Parameters:**
- `engagementFlags: string[]` - Flag names (e.g., "low_engagement", "distracted")
- `markAsReliable?: boolean` - Whether to mark run as reliable (default: false)
- `reliableByBlock?: { [blockName: string]: boolean }` - Per-block reliability (optional)

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** Run document with:
  - `engagementFlags: { [flagName]: true }`
  - `reliable: boolean`
  - `reliableByBlock?: { [blockName]: boolean }` (optional)

**Called From:**
- Assessment completion analysis
- Engagement quality assessment

**Backend Equivalent:**
- **SDK Command:** `sdk.updateEngagementFlags(flags, markAsReliable, reliableByBlock)`
- **REST API:** `PATCH /runs/{runId}` with engagement data

**Notes:**
- Overwrites previous engagement flags
- Supports block-scoped reliability for multi-block assessments
- Throws error if run not started

---

### 21. RoarAppkit.validateParameters()
**Method Path:** `roarfirekit.validateParameters()`

**Description:** Validates task variant parameters against a JSON schema.

**Parameters:**
- `parameterSchema: JSONSchemaType<unknown>` - JSON Schema to validate against

**Return Type:** `Promise<void>`

**Firestore Operations:** None

**Called From:**
- Assessment initialization
- Parameter validation before task start

**Backend Equivalent:**
- **SDK Command:** `sdk.validateParameters(schema)`
- **REST API:** `POST /validate-parameters` with schema and params

**Notes:**
- Uses AJV for schema validation
- Throws detailed error messages on validation failure
- Client-side validation only

---

### 22. RoarAppkit.updateTaskParams()
**Method Path:** `roarfirekit.updateTaskParams()`

**Description:** Updates task variant parameters mid-assessment (e.g., difficulty adjustment).

**Parameters:**
- `newParams: { [key: string]: unknown }` - New variant parameters

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Updates:** Task variant document with new params
- **Updates:** User document to replace old variant ID with new
- **Updates:** Run document with new variantId

**Called From:**
- Adaptive assessment difficulty adjustment
- Parameter changes during assessment

**Backend Equivalent:**
- **SDK Command:** `sdk.updateTaskParams(newParams)`
- **REST API:** `PATCH /runs/{runId}` with new variantId

**Notes:**
- Must be called after `startRun()`
- Handles variant ID updates across user and run documents
- Supports adaptive assessment workflows

---

## Administration/Management Methods

### 23. RoarFirekit.createAdministration()
**Method Path:** `roarfirekit.createAdministration()`

**Description:** Creates or updates an administration (assignment batch).

**Parameters:**
- `name: string` - Administration name
- `publicName?: string` - Public display name
- `assessments: Assessment[]` - List of assessments in administration
- `dateOpen: Date` - Start date
- `dateClose: Date` - End date
- `sequential?: boolean` - Whether assessments must be taken in order
- `orgs?: OrgLists` - Organizations to assign to
- `tags?: string[]` - Metadata tags
- `administrationId?: string` - ID for update (if undefined, creates new)
- `isTestData?: boolean` - Mark as test data
- `legal: Legal` - Legal/consent requirements

**Return Type:** `Promise<void>`

**Firestore Operations:**
- **Creates/Updates:** Administration document in `administrations/{id}`
- **Updates:** User document to add administration ID to `adminData.administrationsCreated`
- **Cloud Function:** Computes assignedOrgs and readOrgs from minimalOrgs

**Called From:**
- Admin dashboard to create/edit assignments
- Batch administration setup

**Backend Equivalent:**
- **SDK Command:** `sdk.createAdministration(administrationData)`
- **REST API:** `POST /administrations` or `PATCH /administrations/{id}`

**Notes:**
- Admin-only operation
- Validates date range (closeDate > openDate)
- Uses minimalOrgs as ground truth; cloud functions compute full org hierarchy
- Supports test data flag

---

### 24. RoarFirekit.getAssignmentStats()
**Method Path:** `roarfirekit.getAssignmentStats()`

**Description:** Retrieves statistics for an assignment (completion rates, scores, etc.).

**Parameters:**
- `administrationIds: string[]` - Administration IDs to get stats for
- `orgId?: string | null` - Filter by organization
- `orgType?: OrgType` - Organization type
- `taskIds?: string[] | null` - Filter by specific tasks
- `fetchAllTaskIds?: boolean` - Fetch all task IDs from administration

**Return Type:** `Promise<unknown>`

**Firestore Operations:**
- **Cloud Function:** Calls `getAssignmentStats` cloud function

**Called From:**
- Admin dashboard for analytics
- Assignment performance reporting

**Backend Equivalent:**
- **SDK Command:** `sdk.getAssignmentStats({ administrationIds, orgId, orgType, taskIds })`
- **REST API:** `GET /administrations/{id}/stats?orgId={orgId}&taskIds={taskIds}`

**Notes:**
- Admin-only operation
- Supports filtering by org and task
- Cloud function handles aggregation

---

## Data Flow Diagrams

### Assessment Start Flow
```
startAssessment(administrationId, taskId)
  ↓
[Transaction Start]
  ├─ Read assignment doc
  ├─ Get task & variant via getTaskAndVariant()
  ├─ Update assessment startedOn
  ├─ Start assignment if first assessment
  ├─ Get user data via getMyData()
  └─ Create RoarAppkit instance
[Transaction Commit]
  ↓
RoarAppkit.startRun()
  ├─ Validate user exists
  ├─ Persist task variant if needed
  ├─ Create run document
  └─ Update user tasks/variants arrays
```

### Trial Recording Flow
```
writeTrial(trialData)
  ↓
Validate required fields
  ↓
Create trial document
  ↓
writeInteractions(assessmentStage, trialRef)
  ├─ Update trial with interaction data
  └─ Increment run-level interaction counters
  ↓
Update run scores
  ├─ Update raw scores (numAttempted, numCorrect, etc.)
  ├─ Compute derived scores (via callback or default)
  └─ Update user lastUpdated
```

### Assessment Completion Flow
```
finishRun()
  ↓
Set completed: true, timeFinished: timestamp
  ↓
Update user lastUpdated
  ↓
completeAssessment(administrationId, taskId)
  ↓
[Transaction Start]
  ├─ Update assessment completedOn
  ├─ Check if all assessments complete
  └─ If all complete: completeAssignment()
[Transaction Commit]
```

---

## Real-time vs Request/Response Patterns

| Operation | Pattern | Latency | Use Case |
|-----------|---------|---------|----------|
| **Trial Recording** | Request/Response | ~100-500ms | Individual trial writes |
| **Score Updates** | Request/Response | ~100-500ms | Incremental score updates |
| **Run Lifecycle** | Request/Response | ~100-500ms | Start/finish operations |
| **Admin Claims** | Real-time Listener | <100ms | Permission changes |
| **ID Token** | Real-time Listener | <100ms | Auth token refresh |
| **Assignment Stats** | Request/Response | ~1-5s | Analytics queries |
| **Task/Variant Fetch** | Request/Response | ~100-300ms | Assessment initialization |

---

## Dependencies Between Methods

```
startAssessment()
  ├─ Depends on: getRoarUid()
  ├─ Depends on: getMyData()
  ├─ Depends on: getTaskAndVariant()
  └─ Returns: RoarAppkit
      ├─ Calls: startRun()
      ├─ Calls: writeTrial()
      ├─ Calls: finishRun()
      └─ Calls: addEngagementFlags()

writeTrial()
  ├─ Depends on: startRun() [must be called first]
  ├─ Calls: writeInteractions()
  └─ Updates: run scores

completeAssessment()
  ├─ Depends on: startAssessment()
  ├─ Depends on: finishRun()
  └─ May call: completeAssignment()

createAdministration()
  ├─ Requires: Admin role
  ├─ Calls: Cloud function for org computation
  └─ Updates: User adminData

getAssignmentStats()
  ├─ Requires: Admin role
  └─ Calls: Cloud function for aggregation
```

---

## Migration Considerations for Backend SDK

### 1. **Transaction Support**
- Current: Firestore transactions for multi-document operations
- Backend: Implement equivalent transactional semantics via REST API or gRPC

### 2. **Real-time Listeners**
- Current: Firestore onSnapshot listeners
- Backend: WebSocket subscriptions or Server-Sent Events (SSE)

### 3. **Cloud Functions**
- Current: httpsCallable for admin operations
- Backend: REST API endpoints with proper authorization

### 4. **Org Hierarchy Computation**
- Current: Cloud functions compute assignedOrgs/readOrgs from minimalOrgs
- Backend: Move logic to backend service with caching

### 5. **Timestamp Handling**
- Current: serverTimestamp() for consistency
- Backend: Server-generated timestamps in API responses

### 6. **Array Operations**
- Current: arrayUnion/arrayRemove for set operations
- Backend: Implement equivalent semantics (idempotent add/remove)

### 7. **Batch Operations**
- Current: Single document writes
- Backend: Support batch write endpoints for efficiency

### 8. **Error Handling**
- Current: Firebase-specific error codes
- Backend: Standardized HTTP status codes and error responses

---

## Summary

The ROAR-Firekit assessment methods follow a clear pattern:

1. **Initialization**: `startAssessment()` → `RoarAppkit.startRun()`
2. **Data Collection**: `writeTrial()` with `addInteraction()`
3. **Completion**: `finishRun()` → `completeAssessment()`
4. **State Management**: Assignment and assessment status tracking
5. **Real-time Updates**: Claims and token listeners for auth state
6. **Admin Operations**: Administration creation, stats retrieval, org management

All methods are designed to work within Firestore's transactional model and support both individual user assessments and batch admin operations. The backend SDK should maintain these patterns while adapting to the new architecture.
