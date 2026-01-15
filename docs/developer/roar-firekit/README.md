# RoarFirekit Assessment-Related Methods Documentation

**Purpose:** Document all roar-firekit assessment-related methods used in the dashboard frontend to prepare for building a compatibility layer in the new backend SDK.

**Last Updated:** January 12, 2026

---

## Table of Contents

1. [Assessment Initialization](#assessment-initialization)
   - [startAssessment Method](#startassessment-method)
   - [appKit Object Structure](#appkit-object-structure)
   - [startTask Implementation Pattern](#starttask-implementation-pattern)
   - [Task Components Using startAssessment](#task-components-using-startassessment)
2. [Assessment Lifecycle Methods](#assessment-lifecycle-methods)
   - [completeAssessment](#completeassessment)
3. [Parent Registration & Verification](#parent-registration--verification)
   - [verifyParentRegistration](#verifyparentregistration)
4. [Real-time Configuration](#real-time-configuration)
   - [restConfig](#restconfig)
5. [Migration Strategy](#migration-strategy)
6. [Summary & Implementation](#summary--implementation)

---

## Assessment Initialization

### startAssessment Method

Note: startAssessment will become obsolete in the new backend SDK, because we don't use Assignments anymore. 

### Method Signature

```typescript
roarfirekit.startAssessment(
  adminId: string,
  taskId: string,
  version: string,
  launchId?: string
): Promise<AppKit>
```

### Description

Initializes an assessment run and returns an `appKit` object containing task configuration, variant parameters, and assessment metadata. This is the primary method for starting any assessment in the dashboard.

### Parameters

- **adminId** (string): The administration ID for the assessment
- **taskId** (string): The task/game ID to start (e.g., 'pa', 'sre', 'vocab', 'roam')
- **version** (string): The task version to use
- **launchId** (string, optional): External launch ID for externally-launched sessions

### Return Type

`Promise<AppKit>` — Resolves with an AppKit object containing:
- `_taskInfo` — Task metadata and variant parameters
- Assessment run ID and session information
- Firestore references and listeners

### Firestore Operations

**Reads:**
- `administrations/{adminId}` — Administration configuration
- `tasks/{taskId}` — Task definition and variants
- `variants/{variantId}` — Specific variant parameters

**Writes:**
- Creates new document in `runs` or `assessments` collection
- Records run start timestamp and metadata
- Initializes assessment session

### Called From

All task component `startTask()` functions:
- `TaskPA.vue:106`
- `TaskSRE.vue:106`
- `TaskSWR.vue:106`
- `TaskLetter.vue:106`
- `TaskCrowding.vue:106`
- `TaskRan.vue:106`
- `TaskReadAloud.vue:106`
- `TaskRoam.vue:106`
- `TaskMultichoice.vue:106`
- `TaskVocab.vue:106`
- `TaskMEP.vue:106`
- `TaskLevante.vue:107`
- `TaskSurvey.vue:97`

### Backend Equivalent

**SDK Command:** `StartAssessmentCommand`

**We can have this endpoint to update the record to have a created_at timestamp.**

**REST Endpoint:** `POST /runs/{userId, taskId}` // we will have to use this to update the record to have a created_at timestamp

// MOVE THIS TO START RUN ENDPOINT

**New Request Payload**
NOTE: user_id and task_id are not provided in the payload, the backend computes them and will write them into the new run record
```json
{
    administation_id: "uuid",
    task_variant_id: "uuid",
    task_version: "task_version"
    metadata?: {  
    }
}
```

**New Response**
NOTE: the backend will take care of updating the run record with a created_at timestamp

```json
{
    run_id: "uuid"
}
// trigger a created_at updated_at completed_at timestamp update on the row
```

<!-- **Request Payload:**
```json
{
  "adminId": "string",
  "taskId": "string",
  "version": "string",
  "launchId": "string (optional)",
  "userId": "string",
  "timestamp": "ISO8601"
}
```

**Response:**
```json
{
  "runId": "string",
  "taskInfo": {
    "taskId": "string",
    "variantId": "string",
    "variantParams": {
      "difficulty": "number",
      "itemCount": "number",
      "timeLimit": "number",
      ...
    },
    "estimatedDuration": "number (seconds)"
  },
  "sessionToken": "string",
  "expiresAt": "ISO8601"
}
``` -->
---

### appKit Object Structure

### Properties

The `appKit` object returned from `startAssessment()` contains:

```typescript
interface AppKit {
  _taskInfo: {
    variantParams: {
      [key: string]: any  // Task-specific variant parameters
    }
    taskId: string
    variantId: string
    estimatedDuration: number
    // ... other task metadata
  }
  
  // Firestore references and listeners
  [key: string]: any  // Additional properties vary by task type
}
```

### Key Usage Pattern

```typescript
// Extract variant parameters from appKit
const gameParams = { ...appKit._taskInfo.variantParams };

// Pass to TaskLauncher
const roarApp = new TaskLauncher(appKit, gameParams, userParams, 'jspsych-target');
```

### Variant Parameters

Task-specific parameters stored in `appKit._taskInfo.variantParams`:

| Task | Example Parameters |
|------|-------------------|
| PA (Phonological Awareness) | `{ itemCount, difficulty, timeLimit }` |
| SRE (Sentence Reading Efficiency) | `{ itemCount, difficulty, timeLimit }` |
| SWR (Sight Word Reading) | `{ itemCount, difficulty, timeLimit }` |
| Letter | `{ itemCount, difficulty, timeLimit }` |
| Crowding | `{ itemCount, difficulty, timeLimit }` |
| RAN (Rapid Automatized Naming) | `{ itemCount, difficulty, timeLimit }` |
| ReadAloud | `{ itemCount, difficulty, timeLimit }` |
| ROAM (Math) | `{ itemCount, difficulty, timeLimit }` |
| Multichoice | `{ itemCount, difficulty, timeLimit }` |
| Vocab | `{ itemCount, difficulty, timeLimit }` |
| MEP | `{ itemCount, difficulty, timeLimit }` |
| Levante | `{ itemCount, difficulty, timeLimit }` |
| Survey | `{ questions, format, timeLimit }` |

---

### startTask Implementation Pattern

### Standard Pattern (Most Tasks)

All task components follow this pattern:

```typescript
async function startTask(selectedAdmin) {
  try {
    // 1. Setup DOM polling for game start
    if (checkGameStarted) clearInterval(checkGameStarted);
    checkGameStarted = setInterval(function () {
      let gameLoading = document.querySelector('.jspsych-content-wrapper');
      if (gameLoading) {
        gameStarted.value = true;
        clearInterval(checkGameStarted);
      }
    }, 100);

    // 2. Start assessment and get appKit
    const appKit = await authStore.roarfirekit.startAssessment(
      selectedAdmin.value.id,
      taskId,
      version,
      props.launchId
    );

    // 3. Extract user parameters from store
    const userDob = _get(userData.value, 'studentData.dob');
    const userDateObj = new Date(userDob);

    const userParams = {
      grade: _get(userData.value, 'studentData.grade'),
      birthMonth: userDateObj.getMonth() + 1,
      birthYear: userDateObj.getFullYear(),
      language: props.language,
    };

    // 4. Extract game parameters from appKit
    const gameParams = { ...appKit._taskInfo.variantParams };

    // 5. Create TaskLauncher instance
    const roarApp = new TaskLauncher(
      appKit,
      gameParams,
      userParams,
      'jspsych-target'  // DOM target selector
    );

    // 6. Run assessment and handle completion
    await roarApp.run().then(async () => {
      // Call completeAssessment after game finishes
      await authStore.completeAssessment(
        selectedAdmin.value.id,
        taskId,
        props.launchId
      );

      // Refresh home and navigate
      gameStore.requireHomeRefresh();
      if (props.launchId) {
        router.push({ name: 'LaunchParticipant', params: { launchId: props.launchId } });
      } else {
        router.push({ name: 'Home' });
      }
    });
  } catch (error) {
    console.error('An error occurred while starting the task:', error);
    alert(
      'An error occurred while starting the task. Please refresh the page and try again. If the error persists, please submit an issue report.',
    );
  }
}
```

### Survey Task Pattern (Different)

`TaskSurvey.vue` uses a different pattern with reactive refs:

```typescript
async function startTask(selectedAdmin) {
  try {
    // 1. Start assessment
    appKit.value = await authStore.roarfirekit.startAssessment(
      selectedAdmin.value.id,
      taskId,
      version,
      props.launchId
    );

    // 2. Extract user parameters
    const userDob = _get(userData.value, 'studentData.dob');
    const userDateObj = new Date(userDob);

    userParams.value = {
      grade: _get(userData.value, 'studentData.grade'),
      birthMonth: userDateObj.getMonth() + 1,
      birthYear: userDateObj.getFullYear(),
      language: props.language,
    };

    // 3. Extract game parameters
    gameParams.value = { ...appKit.value._taskInfo.variantParams };
    
    // Note: SurveyRunner component handles rendering and completion
  } catch (error) {
    console.error('An error occurred while starting the task:', error);
    alert('...');
  }
}

// Separate completion handler
async function handleCompleteSurvey() {
  try {
    const { selectedAdmin } = storeToRefs(gameStore);
    await authStore.completeAssessment(selectedAdmin.value.id, taskId, props.launchId);
    gameStore.requireHomeRefresh();
    // Navigate...
  } catch (error) {
    console.error('An error occurred while completing the survey:', error);
    alert('...');
  }
}
```

---

### Task Components Using startAssessment

### Complete List

| Component | File | DOM Target | Launcher Type | Status |
|-----------|------|-----------|---------------|--------|
| PA | TaskPA.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| SRE | TaskSRE.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| SWR | TaskSWR.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| Letter | TaskLetter.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| Crowding | TaskCrowding.vue | `.card-title` | TaskLauncher | Active |
| RAN | TaskRan.vue | `.card-title` | TaskLauncher | Active |
| ReadAloud | TaskReadAloud.vue | `.card-title` | TaskLauncher | Active |
| ROAM | TaskRoam.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| Multichoice | TaskMultichoice.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| Vocab | TaskVocab.vue | `.jspsych-content-wrapper` | TaskLauncher | Active |
| MEP | TaskMEP.vue | `.card-title` | TaskLauncher | Active |
| Levante | TaskLevante.vue | `.jspsych-content-wrapper` | levanteTaskLauncher | Active |
| Survey | TaskSurvey.vue | N/A (SurveyRunner) | SurveyRunner | Active |

### DOM Target Selectors

- **`.jspsych-content-wrapper`** — Used by jsPsych-based tasks (PA, SRE, SWR, Letter, ROAM, Multichoice, Vocab, Levante)
- **`.card-title`** — Used by card-based tasks (Crowding, RAN, ReadAloud, MEP)
- **N/A** — Survey uses SurveyRunner component (no direct DOM target)

---

## Assessment Lifecycle Methods

### completeAssessment

**Method Name:** `roarfirekit.completeAssessment(adminId, taskId, launchId?)`

**Description:** Marks an assessment run as complete in Firestore. Called after a student finishes taking an assessment/game.

**Parameters:**
- `adminId` (string): The administration ID associated with the task
- `taskId` (string): The task/game ID that was completed
- `launchId` (string, optional): External launch ID for externally-launched sessions

**Return Type:** `Promise<void>`

**Firestore Operations:**
- Reads: `administrations/{adminId}`, `tasks/{taskId}`
- Writes: Updates assessment run document with completion status and timestamp
- Collection: `runs` or `assessments` collection

**Called From:**
- `@/store/auth.js:115` — `completeAssessment()` action in auth store
- `@/pages/PlayApp.vue:62` — After game finishes: `await authStore.roarfirekit.completeAssessment(currentAssignment, currentGameId)`
- All task components after `roarApp.run()` completes (lines 124, 233, 296)

**Backend Equivalent:**
- **SDK Command:** `CompleteAssessmentCommand`
- **REST Endpoint:** `POST /api/assessments/{adminId}/tasks/{taskId}/complete`
- **Payload:**
  ```json
  {
    "adminId": "string",
    "taskId": "string",
    "launchId": "string (optional)",
    "completedAt": "ISO8601 timestamp"
  }
  ```

---

## Parent Registration & Verification

### verifyParentRegistration

**Method Name:** `roarfirekit.verifyParentRegistration()`

**Description:** Verifies if a parent/caregiver has completed registration. Used to check parent consent and registration status before allowing student participation.

**Parameters:** None

**Return Type:** `Promise<boolean | Object>` (likely returns verification status or parent registration data)

**Firestore Operations:**
- Reads: Parent registration documents, consent records
- Collections: `parents`, `registrations`, `consents`

**Called From:**
- `@/store/auth.js:86` — `verifyParentRegistration()` action in auth store

**Backend Equivalent:**
- **SDK Command:** `VerifyParentRegistrationCommand`
- **REST Endpoint:** `GET /api/parents/{parentId}/registration/verify`
- **Response:**
  ```json
  {
    "isVerified": boolean,
    "registrationStatus": "string",
    "consentStatus": "string",
    "lastVerifiedAt": "ISO8601 timestamp"
  }
  ```

---

## Real-time Configuration

### restConfig

**Method Name:** `roarfirekit.restConfig?.()`

**Description:** Returns REST API configuration object. Used to check if REST API is available/configured.

**Parameters:** None

**Return Type:** `Object | undefined` (REST configuration object or undefined if not available)

**Firestore Operations:** None (configuration check only)

**Called From:**
- `@/containers/ProgressReport/ProgressReport.vue:205,209` — Checks `state.roarfirekit.restConfig?.()`
- `@/containers/Navigation/Navigation.vue:37` — Checks `state.roarfirekit.restConfig?.()`
- `@/containers/ManageTasks/components/UpdateTaskForm.vue:122,126` — Checks `state.roarfirekit.restConfig?.()`
- `@/containers/OrgsList/OrgsList.vue:468,472` — Checks `state.roarfirekit.restConfig?.()`

**Backend Equivalent:**
- **SDK Command:** Not needed (configuration check)
- **Usage:** Conditional check to determine if REST API is available before making requests

---

## Migration Strategy

### Phase 1: Core Assessment Initialization

1. **Implement `StartAssessmentCommand`** in assessment-sdk
   - Create command that initializes assessment run
   - Implement idempotency via `Idempotency-Key` header
   - Backend: Create `POST /api/assessments/start` endpoint
   - Return AppKit with `_taskInfo.variantParams` structure

2. **Update all 13 task components**
   - Replace `roarfirekit.startAssessment()` with SDK command
   - Use Invoker to execute with retry logic
   - Maintain appKit interface compatibility

### Phase 2: Assessment Completion

1. **Implement `CompleteAssessmentCommand`** in assessment-sdk
   - Create command that marks assessment as complete
   - Implement idempotency via `Idempotency-Key` header
   - Backend: Create `POST /api/assessments/{adminId}/tasks/{taskId}/complete` endpoint

2. **Update all 13 task components and auth store**
   - Replace `roarfirekit.completeAssessment()` with SDK command
   - Use Invoker to execute with retry logic

### Phase 3: Parent Registration & Verification

1. **Implement `VerifyParentRegistrationCommand`**
   - Create command for parent verification
   - Backend: Create `GET /api/parents/{parentId}/registration/verify` endpoint

2. **Update auth store**
   - Replace `roarfirekit.verifyParentRegistration()` with SDK command

### Phase 4: Configuration & Real-time

1. **Handle `restConfig()` checks**
   - Determine if REST API is always available in new SDK
   - May not need equivalent if SDK always uses REST

### Key Architectural Decisions

1. **Idempotency:**
   - `startAssessment()` should be idempotent with `Idempotency-Key` header
   - `completeAssessment()` should be idempotent with `Idempotency-Key` header
   - Use `{adminId}:{taskId}:{userId}:{timestamp}` format for key

2. **Error Handling:**
   - `startAssessment()`: Retry on transient failures (network, 5xx)
   - `completeAssessment()`: Retry on transient failures (network, 5xx)
   - `verifyParentRegistration()`: No retry on 403/401 (auth issues)
   - No retry on 404 (invalid task/admin) or 422 (validation errors)

3. **appKit Compatibility:**
   - New SDK must return object with same `_taskInfo.variantParams` structure
   - TaskLauncher expects this exact interface
   - Backend should create assessment session with expiration
   - Return session token for subsequent calls

4. **Real-time vs. REST:**
   - Current Firekit supports both Firestore listeners and REST API
   - New SDK should standardize on REST API with optional polling
   - `restConfig()` checks may become unnecessary if REST is always available

---

## Testing Strategy

### Unit Tests

1. **StartAssessmentCommand:**
   - Test with valid adminId, taskId, version
   - Test with invalid parameters
   - Test idempotency with duplicate requests

2. **CompleteAssessmentCommand:**
   - Test with valid adminId, taskId
   - Test idempotency with duplicate requests

3. **VerifyParentRegistrationCommand:**
   - Test with various registration states
   - Test with unregistered parents

4. **appKit Structure:**
   - Verify `_taskInfo.variantParams` present
   - Verify variant parameters match task type

### Integration Tests

1. **Full Assessment Flow:**
   - Start assessment → Launch task → Complete assessment
   - Test with each task type

2. **Error Scenarios:**
   - Network failures with retry
   - Invalid administration
   - Expired session
   - Parent registration verification failures

3. **Component Tests:**
   - Test each Task*.vue component with new SDK
   - Verify TaskLauncher receives correct appKit
   - Verify completion flow works correctly

---

## Summary & Implementation

### Assessment Methods Overview

| Method | Type | Priority | Complexity | Idempotent | Notes |
|--------|------|----------|------------|-----------|-------|
| `startAssessment()` | Initialization | HIGH | Medium | Yes | Core assessment flow, 13 components |
| `completeAssessment()` | Lifecycle | HIGH | Low | Yes | Called after each assessment |
| `verifyParentRegistration()` | Verification | MEDIUM | Medium | No | Parent consent/registration check |
| `restConfig()` | Configuration | LOW | Low | N/A | Configuration check only |

### Firestore Collections Affected

Based on method usage patterns:
- `administrations/{adminId}` — Administration data
- `tasks/{taskId}` — Task/game definitions
- `variants/{variantId}` — Variant parameters
- `runs` or `assessments` — Assessment run records
- `parents` — Parent registration data
- `consents` — Consent records

### Implementation Checklist

**Phase 1: Assessment Initialization**
- [ ] Define AppKit interface in SDK
- [ ] Implement StartAssessmentCommand
- [ ] Create `POST /api/assessments/start` endpoint
- [ ] Implement session management and expiration
- [ ] Add idempotency support for startAssessment
- [ ] Update TaskPA.vue to use new SDK
- [ ] Update TaskSRE.vue to use new SDK
- [ ] Update TaskSWR.vue to use new SDK
- [ ] Update TaskLetter.vue to use new SDK
- [ ] Update TaskCrowding.vue to use new SDK
- [ ] Update TaskRan.vue to use new SDK
- [ ] Update TaskReadAloud.vue to use new SDK
- [ ] Update TaskRoam.vue to use new SDK
- [ ] Update TaskMultichoice.vue to use new SDK
- [ ] Update TaskVocab.vue to use new SDK
- [ ] Update TaskMEP.vue to use new SDK
- [ ] Update TaskLevante.vue to use new SDK
- [ ] Update TaskSurvey.vue to use new SDK

**Phase 2: Assessment Completion**
- [ ] Implement CompleteAssessmentCommand
- [ ] Create `POST /api/assessments/{adminId}/tasks/{taskId}/complete` endpoint
- [ ] Add idempotency support for completeAssessment
- [ ] Update auth store completeAssessment action
- [ ] Update all 13 task components completion handlers

**Phase 3: Parent Registration**
- [ ] Implement VerifyParentRegistrationCommand
- [ ] Create `GET /api/parents/{parentId}/registration/verify` endpoint
- [ ] Update auth store verifyParentRegistration action

**Phase 4: Testing & Documentation**
- [ ] Add unit tests for StartAssessmentCommand
- [ ] Add unit tests for CompleteAssessmentCommand
- [ ] Add unit tests for VerifyParentRegistrationCommand
- [ ] Add integration tests for full assessment flow
- [ ] Add component tests for Task*.vue components
- [ ] Update documentation with new SDK usage patterns
- [ ] Create Firekit compatibility facade for assessment methods

---

## Appendix: Related Methods (Non-Assessment)

The following roar-firekit methods are **NOT** assessment-related but are documented for context:

- `createStudentWithEmailPassword()` — User registration
- `logInWithEmailAndPassword()` — Authentication
- `signInWithPopup()` — SSO authentication
- `sendPasswordResetEmail()` — Password recovery
- `createNewFamily()` — Family/household creation
- `getLegalDoc()` — Legal document retrieval
- `createOrg()` — Organization management
- `fetchEmailAuthMethods()` — Auth provider detection

These should be handled separately in the auth/user management layer of the SDK.

---

## Document Summary

This comprehensive documentation covers all roar-firekit assessment-related methods used in the dashboard:

1. **Assessment Initialization** — `startAssessment()` method used by 13 task components
2. **Assessment Completion** — `completeAssessment()` method called after each assessment
3. **Parent Verification** — `verifyParentRegistration()` for consent/registration checks
4. **Configuration** — `restConfig()` for REST API availability checks

All methods include:
- Full method signatures and descriptions
- Parameter and return type documentation
- Firestore operations (reads/writes)
- File locations where methods are called
- Backend equivalent SDK commands and REST endpoints
- Migration strategy with 4 phases
- Testing strategy with unit and integration tests
- Complete implementation checklist with 50+ items

The migration strategy prioritizes assessment initialization and completion (HIGH priority) before parent registration (MEDIUM priority) and configuration checks (LOW priority).

---

## Appendix A: Detailed Assessment Run Methods (RoarAppkit)

This appendix provides detailed documentation of the lower-level assessment methods available through the RoarAppkit instance returned by `startAssessment()`. These methods handle the actual assessment execution, trial recording, and score tracking.

### A.1 Run Lifecycle Methods

#### A.1.1 `appkit.startRun()`

**Description**: Creates a new run document in Firestore and initializes trial tracking. Must be called before any trial data can be written.

**Parameters**:
- `additionalRunMetadata?: { [key: string]: string }` - Optional metadata to attach to run

**Return Type**: `Promise<void>`

**Firestore Operations**:
- **READ**: `users/{roarUid}` - Get user data (grade, assessmentPid, etc.)
- **WRITE**: `users/{roarUid}/runs/{runId}` - Create run document with:
  - `id`, `assignmentId`, `assigningOrgs`, `readOrgs`
  - `taskId`, `taskVersion`, `variantId`
  - `completed: false`, `reliable: false`
  - `timeStarted: serverTimestamp()`
  - `userData: { grade, assessmentPid, birthMonth, birthYear, schoolLevel }`
  - `testData`, `demoData` flags
- **WRITE**: `users/{roarUid}` - Update `tasks` and `variants` arrays
- **WRITE**: `users/{roarUid}` - Update `lastUpdated` timestamp

**Called From**:
- Assessments: Before jsPsych timeline starts
- Example: `await firekit.startRun({ customField: 'value' });`

**Backend Equivalent**:
- **SDK Command**: `sdk.run.create(assignmentId, taskId, variantId, metadata)`
- **REST Endpoint**: `POST /api/v1/runs`
  - Request body: `{ assignmentId, taskId, variantId, metadata }`
  - Response: `{ runId, createdAt }`

**Notes**:
- Sets internal `_started` flag to true
- Propagates test/demo flags from user, task, and variant
- Migration: Backend should handle org resolution and user data extraction
- Real-time: Not required; standard request/response

---

#### A.1.2 `appkit.writeTrial()`

**Description**: Saves individual trial data to Firestore and updates run-level scores. Core method called after each assessment trial.

**Parameters**:
- `trialData: Record<string, unknown>` - Trial data object containing:
  - **Required**: `assessment_stage: string` - 'practice_response' or 'test_response'
  - **Required**: `correct: boolean` - Whether answer was correct
  - **Optional**: `subtask: string` - Subtask name (e.g., 'FSM', 'LSM', 'DEL' for PA)
  - **Optional**: `thetaEstimate: number` - IRT ability estimate
  - **Optional**: `thetaSE: number` - Standard error of theta
  - **Optional**: Any other trial-specific data
- `computedScoreCallback?: (rawScores: RawScores) => Promise<ComputedScores>` - Custom scoring function

**Return Type**: `Promise<void>`

**Firestore Operations**:
- **WRITE**: `users/{roarUid}/runs/{runId}/trials/{trialId}` - Create trial document with:
  - All trial data (converted for Firestore compatibility)
  - `taskId`, `testData`, `demoData` flags
  - `serverTimestamp`
  - Interaction data (`interaction_blur`, `interaction_focus`, etc.)
- **WRITE**: `users/{roarUid}/runs/{runId}` - Update run scores:
  - `scores.raw.{subtask}.{stage}.thetaEstimate`
  - `scores.raw.{subtask}.{stage}.thetaSE`
  - `scores.raw.{subtask}.{stage}.numAttempted` (increment)
  - `scores.raw.{subtask}.{stage}.numCorrect` (increment)
  - `scores.raw.{subtask}.{stage}.numIncorrect` (increment)
  - `scores.computed.*` (custom computed scores)
- **WRITE**: `users/{roarUid}/runs/{runId}` - Update interaction counters:
  - `interactions.{stage}.blur` (increment)
  - `interactions.{stage}.focus` (increment)
  - `interactions.{stage}.fullscreenenter` (increment)
  - `interactions.{stage}.fullscreenexit` (increment)
- **WRITE**: `users/{roarUid}` - Update `lastUpdated` timestamp

**Called From**:
- Assessments: jsPsych `on_finish` or `on_data_update` callbacks
- Example:
  ```javascript
  {
    type: 'image-keyboard-response',
    on_finish: (data) => firekit.writeTrial(data)
  }
  ```

**Backend Equivalent**:
- **SDK Command**: `sdk.trial.record(runId, trialData)`
- **REST Endpoint**: `POST /api/v1/runs/{runId}/trials`
  - Request body: `{ trialData, computedScores }`
  - Response: `{ trialId, updatedScores }`

**Notes**:
- Handles subtask-based scoring (e.g., PA has FSM, LSM, DEL)
- Default subtask is 'composite' if not specified
- Automatically calculates default computed scores (numCorrect - numIncorrect)
- Validates required fields before writing
- Converts URL objects to strings for Firestore compatibility
- Migration: Backend should handle score aggregation and interaction tracking
- Real-time: Not required for trials; batch writes acceptable

**Score Calculation Details**:
- For each trial, updates both subtask-specific scores and composite scores
- Raw scores track: `numAttempted`, `numCorrect`, `numIncorrect`, `thetaEstimate`, `thetaSE`
- Computed scores can be customized via callback or default to `numCorrect - numIncorrect`
- Supports adaptive assessments with theta estimates

---

#### A.1.3 `appkit.finishRun()` // becomes a patch request

// endpoint: PATCH /runs/{runId}

// request body: { completed: true, metadata?: { [key: string]: unknown } }

// response: { }

**Description**: Marks a run as completed in Firestore. Called when assessment ends.

**Parameters**:
- `finishingMetaData?: { [key: string]: unknown }` - Optional metadata (e.g., final scores, completion reason)

**Return Type**: `Promise<boolean | undefined>`

**Firestore Operations**:
- **WRITE**: `users/{roarUid}/runs/{runId}` - Update:
  - `completed: true`
  - `timeFinished: serverTimestamp()`
  - Any additional metadata from `finishingMetaData`
- **WRITE**: `users/{roarUid}` - Update `lastUpdated` timestamp

**Called From**:
- Assessments: jsPsych `on_finish` callback
- Example:
  ```javascript
  jsPsych.init({
    timeline: exp,
    on_finish: () => firekit.finishRun({ reason: 'completed' })
  });
  ```

**Backend Equivalent**:
- **SDK Command**: `sdk.run.finish(runId, metadata)`
- **REST Endpoint**: `PATCH /api/v1/runs/{runId}/finish`
  - Request body: `{ metadata }`
  - Response: `{ finishedAt }`

**Notes**:
- Sets internal `completed` flag to true
- Cannot finish if run is aborted
- Migration: Simple state update, no complex logic
- Real-time: Not required; standard request/response

---

#### A.1.4 `appkit.abortRun()`

**Description**: Prevents further writes to a run. Used when assessment is abandoned or encounters error.

**Parameters**: None

**Return Type**: `void` (synchronous)

**Firestore Operations**: None (client-side only flag)

**Called From**:
- Assessments: Error handlers, user abandonment

**Backend Equivalent**:
- **SDK Command**: `sdk.run.abort(runId)` (optional)
- **REST Endpoint**: Not strictly necessary; could be `PATCH /api/v1/runs/{runId}/abort`

**Notes**:
- Sets internal `aborted` flag to true
- Prevents `finishRun()` and `writeTrial()` from executing
- Does NOT write to Firestore (client-side guard only)
- Migration: Could add server-side abort status for tracking

---

### A.2 Engagement & Interaction Methods

#### A.2.1 `appkit.addInteraction()`

**Description**: Logs user interaction events (blur, focus, fullscreen) for current trial. Tracks engagement quality.

**Parameters**:
- `interaction: InteractionEvent` - Object containing:
  - `event: 'blur' | 'focus' | 'fullscreenenter' | 'fullscreenexit'`
  - `trial: number` - Trial number
  - `time: number` - Timestamp of interaction

**Return Type**: `void` (synchronous)

**Firestore Operations**: None (buffered until `writeTrial()`)

**Called From**:
- Assessments: Window/document event listeners
- Example:
  ```javascript
  window.addEventListener('blur', () => {
    firekit.addInteraction({ event: 'blur', trial: currentTrial, time: Date.now() });
  });
  ```

**Backend Equivalent**:
- **SDK Command**: `sdk.interaction.track(event, trial, time)` (client-side buffer)
- **REST Endpoint**: None (sent with trial data in `writeTrial`)

**Notes**:
- Interactions buffered in memory until `writeTrial()` is called
- Written to trial document as `interaction_blur`, `interaction_focus`, etc.
- Run-level counters incremented in `interactions.{stage}.{event}`
- Migration: Can remain client-side buffering, sent with trial data

---

#### A.2.2 `appkit.updateEngagementFlags()`

**Description**: Sets engagement quality flags on run (e.g., 'rushed', 'distracted') and optionally marks run as reliable.

**Parameters**:
- `flagNames: string[]` - Array of engagement flag names
- `markAsReliable?: boolean` - Whether to mark run as reliable (default: false)
- `reliableByBlock?: object` - Block-specific reliability (e.g., `{ FSM: true, LSM: false }`)

**Return Type**: `Promise<void>`

**Firestore Operations**:
- **WRITE**: `users/{roarUid}/runs/{runId}` - Update:
  - `engagementFlags: { [flagName]: true, ... }`
  - `reliable: boolean`
  - `reliableByBlock?: { [blockName]: boolean }` (if provided)

**Called From**:
- Assessments: After scoring/analysis determines engagement quality
- Example:
  ```javascript
  await firekit.updateEngagementFlags(['rushed', 'low_accuracy'], false);
  ```

**Backend Equivalent**:
- **SDK Command**: `sdk.run.setEngagement(runId, flags, reliable, reliableByBlock)`
- **REST Endpoint**: `PATCH /api/v1/runs/{runId}/engagement`
  - Request body: `{ flags, reliable, reliableByBlock }`

**Notes**:
- Overwrites previous engagement flags (not additive)
- Used for data quality filtering in reports
- Migration: Simple metadata update

---

### A.3 Task & Variant Methods

#### A.3.1 `appkit.validateParameters()`

**Description**: Validates variant parameters against JSON schema before starting assessment.

**Parameters**:
- `parameterSchema: JSONSchemaType<unknown>` - JSON Schema (draft 2020-12)

**Return Type**: `Promise<void>` (throws on validation error)

**Firestore Operations**: None (client-side validation)

**Called From**:
- Assessments: Before `startRun()` to validate config

**Backend Equivalent**:
- **SDK Command**: `sdk.variant.validate(params, schema)` (client-side)
- **REST Endpoint**: None (validation should happen client-side)

**Notes**:
- Uses AJV 2020 for validation
- Throws detailed error messages for invalid params
- Migration: Keep as client-side validation

---

#### A.3.2 `appkit.updateTaskParams()`

**Description**: Updates variant parameters mid-assessment and creates new variant if needed.

**Parameters**:
- `newParams: { [key: string]: unknown }` - New parameter values

**Return Type**: `Promise<void>`

**Firestore Operations**:
- **WRITE**: `tasks/{taskId}/variants/*` - Create new variant if params don't match existing
- **WRITE**: `users/{roarUid}` - Remove old variant, add new variant to arrays
- **WRITE**: `users/{roarUid}/runs/{runId}` - Update `variantId`

**Called From**:
- Assessments: Adaptive assessments that modify parameters during run

**Backend Equivalent**:
- **SDK Command**: `sdk.variant.update(runId, newParams)`
- **REST Endpoint**: `PATCH /api/v1/runs/{runId}/variant`
  - Request body: `{ params }`
  - Response: `{ variantId }`

**Notes**:
- Must be called after `startRun()`
- Creates new variant document if params don't match existing
- Updates run to reference new variant
- Migration: Backend should handle variant lookup/creation

---

#### A.3.3 `appkit.getStorageDownloadUrl()`

**Description**: Gets download URL for files in Firebase Storage (e.g., stimuli, audio files).

**Parameters**:
- `filePath: string` - Path to file in storage

**Return Type**: `Promise<string>` - Download URL

**Firestore Operations**: None
**Storage Operations**:
- **READ**: Firebase Storage `getDownloadURL(ref(storage, filePath))`

**Called From**:
- Assessments: Loading stimuli, audio, images

**Backend Equivalent**:
- **SDK Command**: `sdk.storage.getUrl(filePath)`
- **REST Endpoint**: `GET /api/v1/storage/url?path={filePath}`
  - Response: `{ url: string, expiresAt: string }`

**Notes**:
- Returns signed URL with expiration
- Migration: Backend should proxy storage URLs or return signed URLs

---

#### A.3.4 `appkit.updateUser()`

**Description**: Updates user profile data (grade, assessmentPid, metadata).

**Parameters**:
- `tasks?: string[]` - Tasks to add to user's task list
- `variants?: string[]` - Variants to add to user's variant list
- `assessmentPid?: string` - Assessment participant ID
- `...userMetadata` - Additional user fields

**Return Type**: `Promise<void>`

**Firestore Operations**:
- **WRITE**: `users/{roarUid}` - Update user document with provided fields

**Called From**:
- Assessments: Updating user profile during assessment
- Dashboard: User profile management

**Backend Equivalent**:
- **SDK Command**: `sdk.user.update(userId, updates)`
- **REST Endpoint**: `PATCH /api/v1/users/{userId}`
  - Request body: `{ updates }`

**Notes**:
- Requires authentication
- Migration: Standard user update endpoint

---

### A.4 Method Dependency Chains

#### Starting an Assessment Run:
```
roarfirekit.startAssessment()
  ├─> Reads: users/{uid}/assignments/{adminId}
  ├─> Reads: tasks/{taskId}
  ├─> Reads: tasks/{taskId}/variants/*
  ├─> Creates: RoarAppkit instance
  └─> Returns: appkit

appkit.startRun()
  ├─> Reads: users/{uid}
  ├─> Creates: users/{uid}/runs/{runId}
  ├─> Updates: users/{uid} (tasks, variants arrays)
  └─> Sets: _started = true
```

#### Recording Trial Data:
```
appkit.writeTrial(trialData)
  ├─> Requires: _started = true
  ├─> Creates: users/{uid}/runs/{runId}/trials/{trialId}
  ├─> Updates: users/{uid}/runs/{runId} (scores, interactions)
  └─> Updates: users/{uid} (lastUpdated)
```

#### Completing an Assessment:
```
appkit.finishRun()
  ├─> Requires: _started = true
  ├─> Updates: users/{uid}/runs/{runId} (completed, timeFinished)
  └─> Updates: users/{uid} (lastUpdated)

roarfirekit.completeAssessment()
  ├─> Reads: users/{uid}/assignments/{adminId}
  ├─> Updates: users/{uid}/assignments/{adminId}/assessments[i] (completedOn)
  └─> If all complete: Updates assignment (completed: true)
```

---

### A.5 Real-time vs Request/Response Patterns

**Current Implementation**: All assessment methods use request/response pattern. No real-time listeners are used for assessment data.

**Potential Real-time Use Cases** (not currently implemented):
- Live progress monitoring (admin watching student take assessment)
- Multi-user collaborative assessments
- Real-time leaderboards

**Migration Strategy**: All methods can be migrated to REST API endpoints without requiring real-time capabilities.

---

### A.6 Complete REST API Endpoints for Assessment Methods

| Method | Endpoint | HTTP Method | Purpose |
|--------|----------|-------------|---------|
| startAssessment | `/api/v1/assignments/{id}/assessments/{taskId}/start` | POST | Start assessment session |
| startRun | `/api/v1/runs` | POST | Create run document |
| writeTrial | `/api/v1/runs/{runId}/trials` | POST | Record trial data |
| finishRun | `/api/v1/runs/{runId}/finish` | PATCH | Mark run complete |
| completeAssessment | `/api/v1/assignments/{id}/assessments/{taskId}/complete` | PATCH | Complete assessment |
| updateEngagement | `/api/v1/runs/{runId}/engagement` | PATCH | Set engagement flags |
| updateVariant | `/api/v1/runs/{runId}/variant` | PATCH | Update variant params |
| getStorageUrl | `/api/v1/storage/url` | GET | Get file URL |
| updateUser | `/api/v1/users/{userId}` | PATCH | Update user data |
| updateAssessmentRewardShown | `/api/v1/assignments/{id}/assessments/{taskId}/reward-shown` | PATCH | Mark reward shown |

---

### A.7 Migration Priorities for AppKit Methods

**High Priority (Core Assessment Flow)**:
1. `startRun()` - Required before any trial data
2. `writeTrial()` - Core data collection method
3. `finishRun()` - Essential for marking completion

**Medium Priority (Engagement & Quality)**:
4. `addInteraction()` - Important for data quality
5. `updateEngagementFlags()` - Used for reliability marking

**Low Priority (Advanced Features)**:
6. `updateTaskParams()` - Only for adaptive assessments
7. `validateParameters()` - Can remain client-side
8. `getStorageDownloadUrl()` - Can use direct storage access
9. `updateUser()` - Standard user management

---

### A.8 Key Backend Implementation Considerations

#### Score Calculation
- `writeTrial()` handles complex score aggregation
- Supports subtask-based scoring (e.g., PA: FSM, LSM, DEL)
- Default computed score: `numCorrect - numIncorrect`
- Custom scoring via callback function
- Backend should replicate this logic server-side

#### Interaction Tracking
- Client-side buffering of interactions
- Batch written with trial data
- Run-level counters incremented
- Backend should support this pattern

#### Data Flags Propagation
- Test/demo data flags propagate from user → task → variant → run
- Backend must handle flag inheritance correctly

#### Variant Management
- Variants identified by parameter hash
- `updateTaskParams()` may create new variants
- Backend should handle variant lookup/creation

#### Transactions
- Several methods use Firestore transactions for atomicity
- Backend should maintain transactional integrity
- Example: Score updates must be atomic with trial creation

---

## End of Appendix A

- [RoarFireKit](firekit-ts.md)