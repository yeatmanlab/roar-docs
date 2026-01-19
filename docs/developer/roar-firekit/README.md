# RoarFirekit Assessment Methods → New Backend SDK Compatibility Spec

**Purpose:** Document all assessment-related `@bdelab/roar-firekit` methods used by the dashboard frontend and assessments, and define how each maps to the new backend SDK + REST API (compatibility layer).

---

## Core Direction: Runs are event-sourced

Instead of patching run rows with client-provided timestamps (e.g., `PATCH /runs/:id { completed: true }`), we append **run events** and let the backend set timestamps and trigger side effects (scoring, reliability, etc.):

- **Create a run:** `POST /v1/runs`
- **Mutate run state:** `POST /v1/runs/{run_id}/events` with a payload like:
  ```json
  {"type":"complete"}
  ```

This matches the current backend direction from Adam: `POST /v1/runs/{run_id}/events` with `{"type":"string"}`.

---

## Table of contents

1. [Assessment Initialization](#assessment-initialization)
2. [Run Lifecycle](#run-lifecycle)
3. [Trial & Interaction Recording](#trial--interaction-recording)
4. [Engagement & Reliability](#engagement--reliability)
5. [Task/Variant Utilities](#taskvariant-utilities)
6. [User/Profile Updates](#userprofile-updates)
7. [Parent Registration Verification](#parent-registration-verification)
8. [Deprecated Assignment Methods](#deprecated-assignment-methods)
9. [Dependencies Between Methods](#dependencies-between-methods)
10. [Real-time vs Request/Response](#real-time-vs-requestresponse)

---

# Assessment Initialization

## 1) roarfirekit.startAssessment(adminId, taskId, version, launchId?)

### Status
**DEPRECATE (Assignments-based start).**  
**Replacement:** “Create run + return task config” (and return an `appKit`-compatible object so existing launchers keep working).

### Method name
`roarfirekit.startAssessment(adminId, taskId, version, launchId?) : Promise<AppKit>`

### What it does (today)
- Finds the appropriate **task + variant configuration** for a user within an administration/assignment
- Initializes the assessment session
- Returns an `appKit` object used by `TaskLauncher` / task runners (e.g., jsPsych apps)
- Often triggers underlying actions like “mark assessment started” in assignment state

### Parameters (today)
- `adminId: string` — administration/assignment id
- `taskId: string` — task identifier (e.g., `pa`, `sre`, `roam`, etc.)
- `version: string` — task version string
- `launchId?: string` — external launch context (optional)

### Return type (today)
`Promise<AppKit>` containing at least:
- `appKit._taskInfo.variantParams`
- `appKit._taskInfo.taskId`
- `appKit._taskInfo.variantId`

### Firestore operations (today)
Typical reads/writes include:
- **Read** administration/assignment context
- **Read** task + variants (or variant by params)
- **Write** “assessment started” timestamps to assignment state
- **Create** run context (directly or indirectly depending on flow)

### Called from
Dashboard task pages’ `startTask()` flows (Task*.vue), e.g.:
- `TaskPA.vue`, `TaskSRE.vue`, `TaskSWR.vue`, `TaskLetter.vue`, `TaskCrowding.vue`, `TaskRan.vue`, `TaskReadAloud.vue`,
  `TaskRoam.vue`, `TaskMultichoice.vue`, `TaskVocab.vue`, `TaskMEP.vue`, `TaskLevante.vue`, `TaskSurvey.vue`

# Run Lifecycle

## 2) appkit.startRun(additionalRunMetadata?)

### Status
**MIGRATE** (run start is a backend event; backend sets timestamp)

### Method name
`appkit.startRun(additionalRunMetadata?) : Promise<void>`

### What it does (today)
- Creates a run document
- Sets “started” timestamps
- Writes initial run metadata and user context

### Parameters
- `additionalRunMetadata?: Record<string, unknown>`

### Return type
`Promise<void>`

### Firestore operations (today)
- Create `users/{uid}/runs/{runId}`
- Update `users/{uid}` tracking arrays and timestamps

### Backend equivalent
**No direct equivalent needed** because `POST /v1/runs` already exists and returns a run id.

**When using a type as suggested**
- **SDK:** `sdk.runs.events.metadata(runId, metadata)`
- **REST:** `POST /v1/runs/{run_id}/events`

  ```json
  {
    "type": "run_metadata",
    "metadata": {}
  }
  ```
---

## 3) `appkit.finishRun(finishingMetaData?)`

### Status
**MIGRATE** (run completion is a backend event; backend sets timestamp)

### Method name
`appkit.finishRun(finishingMetaData?) : Promise<boolean | undefined>`

### What it does (today)
- Marks the run as completed
- Writes `timeFinished` using server timestamp
- Adds optional finishing metadata

### Parameters
- `finishingMetaData?: Record<string, unknown>`

### Return type
`Promise<boolean | undefined>`

### Firestore operations (today)
- Update run doc: completed flag/timestamp + finishing metadata
- Update user lastUpdated

### Backend equivalent
**SDK:** `sdk.runs.events.complete(runId, metadata?)`  
**REST:** `POST /v1/runs/{run_id}/events`

**Request**
```json
{
  "type": "complete",
  "metadata": {}
}
```

**Response**
```json
{
  "run_id": "uuid",
  "completed_at": "server_timestamp"
}
```
---

## 4) `appkit.abortRun()`

// ASK

### Status
**OPTIONAL / MAYBE DEPRECATE**  
Keep client-side guard, and optionally log a server event for analytics/debugging.

### Method name
`appkit.abortRun() : void`

### What it does (today)
- Sets a local “aborted” flag so future writes are blocked
- Does not always persist abort state in Firestore

### Parameters
None

### Return type
`void`

### Backend equivalent (optional)
**SDK:** `sdk.runs.events.abort(runId, { reason })`  
**REST:** `POST /v1/runs/{run_id}/events`

**Request**
```json
{
  "type": "abort",
  "metadata": {
    "reason": "user_exit|error|timeout"
  }
}
```

**Response**
```json
{ "ok": true }
```

---

# Trial & Interaction Recording

## 5) appkit.writeTrial(trialData, computedScoreCallback?)

// ASK

### Status
**MIGRATE** (core of the measurement pipeline)

### Method name
`appkit.writeTrial(trialData, computedScoreCallback?) : Promise<void>`

### What it does (today)
- Writes a trial record
- Updates run-level score aggregates (raw + computed)
- Persists interaction arrays and increments interaction counters
- Performs validation (requires `assessment_stage`, `correct`)

### Parameters
- `trialData: Record<string, unknown>`
  - required: `assessment_stage`, `correct`
  - optional: `subtask`, `thetaEstimate`, `thetaSE`, etc.
- `computedScoreCallback?: (rawScores) => Promise<computedScores>`
  - **Migration note:** this should move to backend, or be replaced by a server-side scoring pipeline.

### Return type
`Promise<void>`

### Firestore operations (today)
- Create `runs/{runId}/trials/{trialId}`
- Update run doc aggregates
- Update trial doc with interactions
- Update user timestamps

### Backend equivalent
**SDK:** `sdk.runs.events.trial(runId, payload)`  
**REST:** `POST /v1/runs/{run_id}/events` // ASK if trials should also be considered events

**Request**
```json
{
  "type": "trial",
  "trial": {
    "assessment_stage": "practice_response|test_response", // these two are absolutely required, check on diagram
    "correct": 0|1,
    "payload": {
      "task_specific_fields": "..."
    }
  },
  "interactions": [
    { "event": "blur", "trial": 3, "time": 1730000000000 }
  ]
}
```

**Response**
```json
{
  "trial_id": "uuid",
  "updated_run": {
    "scores": { "raw": {}, "computed": {} },
    "interaction_counts": {}
  }
}
```

### Notes to ASK
- Backend should insert into:
  - `pg_run_trials`
  - `pg_run_trial_interactions` (if provided)
  - and atomically update `pg_runs` score snapshot fields if you maintain them.

---

## 6) appkit.addInteraction(interaction)

### Status
**CLIENT-SIDE** buffering (recommended)
**DEPRECATE** contemplated by writeTrial

### Method name
`appkit.addInteraction(interaction) : void`

### What it does (today)
- Buffers blur/focus/fullscreen events in-memory
- Later written alongside a trial write

### Parameters
`interaction: { event: 'blur'|'focus'|'fullscreenenter'|'fullscreenexit', trial: number, time: number }`

### Return type
`void`

### Firestore operations (today)
None immediately (persisted by `writeTrial()`)

### Backend equivalent
None directly; send buffered interactions with the **trial event**.

---

# Engagement & Reliability

## 7) appkit.updateEngagementFlags(flagNames, markAsReliable?, reliableByBlock?)

### Status
**MIGRATE**

### Method name
`appkit.updateEngagementFlags(flags, markAsReliable?, reliableByBlock?) : Promise<void>`

### What it does (today)
- Sets engagement flags on the run
- Optionally marks run as reliable
- Optionally stores block-scoped reliability (for multi-block tasks)

### Parameters
- `flagNames: string[]`
- `markAsReliable?: boolean`
- `reliableByBlock?: Record<string, boolean>`

### Return type
`Promise<void>`

### Firestore operations (today)
- Update run doc: engagement flags + reliability fields

### Backend equivalent
**SDK:** `sdk.runs.events.reliability(runId, payload)`  
**REST:** `POST /v1/runs/{run_id}/events`

**Request**
```json
{
  "type": "reliability",
  "engagement_flags": { "incomplete": true, "..." },
  "reliable": true|false,
}
```

**Response**
```json
{ "ok": true }
```

### Notes to ASK
- Making this an “event” so we can later add server-side validations and side effects?.

---

# Task/Variant Utilities

## 8) appkit.validateParameters(parameterSchema)

### Backend equivalent
**SDK:** `sdk.tasks.validateParameters(taskId, params)`
**REST:** `POST /v1/tasks/{task_id}/validate`

### Status
**CLIENT-SIDE / DEPRECATE**

### Method name
`appkit.validateParameters(schema) : Promise<void>`

### What it does (today)
- Validates variant params
- Throws on validation error

// ASK ABOUT PAYLOAD AND RESPONSE
---

## 9) appkit.updateTaskParams(newParams)

### Status
**MIGRATE (ask if needed)**

### Method name
`appkit.updateTaskParams(newParams) : Promise<void>`

### What it does (today)
- Finds/creates a new variant for updated params
- Updates run to reference new variant id
- Updates user task/variant tracking

### Backend equivalent
**SDK:** `sdk.runs.events.variantUpdate(runId, { params })`  
**REST:** `POST /v1/tasks/{task_id}/variants/{variant_id}/update`

**Request**
```json
{
  "params": { "difficulty": 2 }
}
```

**Response**
```json
{
  "task_variant_id": "uuid"
}
```

### Notes
- Backend should own variant lookup/creation rules.

---

## 10) appkit.getStorageDownloadUrl(filePath)

### Status
**DEPRECATE IT IS NOT ON USE**

### Method name
`appkit.getStorageDownloadUrl(filePath) : Promise<string>`

### What it does (today)
- Fetches a signed download URL for stimuli/assets

---

# User/Profile Updates

## 11) appkit.updateUser(...)
// ASK

### Status
**CURRENTLY LIVES IN APPKIT AND IN USER.TS SO I DON'T THINK IS IS RELATED TO THE ASSESSMENT SDK**

### Method name
`appkit.updateUser(updates) : Promise<void>`

### What it does (today)
- Updates user metadata (sometimes in multiple Firebase projects)
---

# Parent Registration Verification

## 12) roarfirekit.verifyParentRegistration()

### Status
**ASK, I DONT THINK THIS IS RELATED TO THE ASSESSMENT SDK**

### Method name
`roarfirekit.verifyParentRegistration() : Promise<boolean | object>`

### What it does (today)
- Verifies parent/caregiver registration + consent readiness before allowing student participation

---

# Deprecated Assignment Methods

If “assignments” are removed from the model, the following **should not be ported**:

## 13) roarfirekit.startAssignment(administrationId, ...)
**Status:** DEPRECATE

## 14) roarfirekit.completeAssignment(administrationId, ...)
**Status:** DEPRECATE

## 15) roarfirekit.updateAssessmentRewardShown(administrationId, taskId)
**Status:** DEPRECATE NEVER USED
Optional replacement if product wants tracking:
```json
POST /v1/runs/{run_id}/events
{
  "type": "reward_shown"
}
```

---

# Dependencies Between Methods

## Normal flow
1. **Start / create run**
   - `POST /v1/runs` (returns `run_id` and optionally task config)
2. **During assessment**
   - buffer interactions (client-side)
   - write trials:
     - `POST /v1/runs/{run_id}/events` with `type:"trial"`
3. **Finish**
   - `POST /v1/runs/{run_id}/events` with `type:"complete"`
4. **Optional post-processing**
   - `POST /v1/runs/{run_id}/events` with `type:"reliability"`

---

# Real-time vs Request/Response

Assessment runtime can be **request/response only**:
- trials and completion are HTTP events
- no realtime subscriptions required

Real-time listeners (claims/token) are **out of scope** for the assessment SDK.

---

## Quick Decision Matrix

| Method | Decision |
|---|---|
| `roarfirekit.startAssessment` | DEPRECATE NEVER USED |
| `roarfirekit.completeAssessment` | DEPRECATE NEVER USED |
| `roarfirekit.updateAssessmentRewardShown` | DEPRECATE NEVER USED |
| `roarfirekit.startAssignment` | DEPRECATE NEVER USED |
| `roarfirekit.completeAssignment` | DEPRECATE NEVER USED |
| `roarfirekit.verifyParentRegistration` | NOT RELATED TO ASSESSMENT SDK |
| `appkit.startRun` | MIGRATE → `POST /v1/runs` |
| `appkit.writeTrial` | MIGRATE → `events: trial` |
| `appkit.addInteraction` | CLIENT-SIDE MANAGED BY WRITE TRIAL |
| `appkit.finishRun` | MIGRATE → `events: complete` |
| `appkit.abortRun` | OPTIONAL → `events: abort` |
| `appkit.updateEngagementFlags` | MIGRATE → `events: reliability` |
| `appkit.validateParameters` | ASK |
| `appkit.updateTaskParams` | MIGRATE (if needed) → `events: variant_update` |
| `appkit.getStorageDownloadUrl` | NOT USED |
| `appkit.updateUser` | NOT RELATED TO ASSESSMENT SDK |

---