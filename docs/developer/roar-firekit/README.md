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

## Table of contents (by function / method)

### Assessment & AppKit Initialization
1. [`roarfirekit.startAssessment`](#1-roarfirekitstartassessmentadminid-taskid-version-launchid)
2. [`appkit.startRun`](#2-appkitstartrunadditionalrunmetadata)
3. [`appkit.finishRun`](#3-appkitfinishrunfinishingmetadata)
4. [`appkit.abortRun`](#4-appkitabortrun)

### Trial & Interaction Recording
5. [`appkit.writeTrial`](#5-appkitwritetrialtrialdata-computedscorecallback)
6. [`appkit.addInteraction`](#6-appkitaddinteractioninteraction)

### Engagement & Reliability
7. [`appkit.updateEngagementFlags`](#7-appkitupdateengagementflagsflagnames-markasreliable-reliablebyblock)

### Task / Variant Utilities
8. [`appkit.validateParameters`](#8-appkitvalidateparametersparameterschema)
9. [`appkit.updateTaskParams`](#9-appkitupdatetaskparamsnewparams)
10. [`appkit.getStorageDownloadUrl`](#10-appkitgetstoragedownloadurlfilepath)

### User & Profile Updates
11. [`appkit.updateUser`](#11-appkitupdateuser)

### Parent / Non-Assessment Utilities
12. [`roarfirekit.verifyParentRegistration`](#12-roarfirekitverifyparentregistration)

### Deprecated Assignment APIs
13. [`roarfirekit.startAssignment`](#13-roarfirekitstartassignmentadministrationid)
14. [`roarfirekit.completeAssignment`](#14-roarfirekitcompleteassignmentadministrationid)
15. [`roarfirekit.updateAssessmentRewardShown`](#15-roarfirekitupdateassessmentrewardshownadministrationid-taskid)

### Architecture & Flow
16. [Dependencies Between Methods](#dependencies-between-methods)
17. [Real-time vs Request/Response](#real-time-vs-requestresponse)
18. [Quick Decision Matrix](#quick-decision-matrix)


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
- **REST:** `POST /v1/runs/`

  ```json
  {
    "type": "start",
    "variant_id": "variant_id",
    "task_version": "task_version",
    "administration_id?": "administration_id",
    "metadata?": {}
  }
  ```

  **Response**
  ```json
  {
    "run_id": "uuid",
  }
  ```
---

## 3) appkit.finishRun(finishingMetaData?)

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
  "status": "200"
}
```
---

## 4) appkit.abortRun()

### Status
**DEPRECATE**  
The function is listed on the apps but is not used.

### Method name
`appkit.abortRun() : void`

### What it does (today)
- Sets a local “aborted” flag so future writes are blocked
- Does not always persist abort state in Firestore

### Parameters
None

### Return type
`void`

---

# Trial & Interaction Recording

## 5) appkit.writeTrial(trialData, computedScoreCallback?)

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
**REST:** `POST /v1/runs/{run_id}/events`

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
  "status": "200"
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
{ "status": "200" }
```

### Notes to ASK
- Making this an “event” so we can later add server-side validations and side effects?.

---

# Task/Variant Utilities

## 8) appkit.validateParameters(parameterSchema)

### Status
**DEPRECATE**
We will use the variantId to update the parameters.

### Backend equivalent
**SDK:** `sdk.tasks.validateParameters(taskId, params)`
**REST:** `POST /v1/tasks/{task_id}/validate`

### Status
**DEPRECATE**
We will use the variantId to validate the parameters. 

### Method name
`appkit.validateParameters(schema) : Promise<void>`

### What it does (today)
- Validates variant params
- Throws on validation error

---

## 9) appkit.updateTaskParams(newParams)

### Status
**DEPRECATE**
We will use the variantId to update the parameters.

### Method name
`appkit.updateTaskParams(newParams) : Promise<void>`

### What it does (today)
- Finds/creates a new variant for updated params
- Updates run to reference new variant id
- Updates user task/variant tracking

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

### Status
**MIGRATE**
We currently have a class `RoarAppUser` in user.ts and we use it on appkit.ts to update the user metadata.
It is currently being used in ROAR Apps (SWR, SRE, PA, ROAM-apps, COMP-apps, etc.)

### Method name
`appkit.updateUser(updates) : Promise<void>`

### What it does (today)
- Updates user metadata (sometimes in multiple Firebase projects)

### Backend equivalent
**SDK:** `sdk.runs.events.reliability(runId)`  
**REST:** `POST /v1/runs/{run_id}/events`

export interface UserUpdateInput {
  /** These are keys that all users can update */
  tasks?: string[];
  variants?: string[];
  /** And these are keys that only guest users will be able to create/update */
  assessmentPid?: string;
  [key: string]: unknown;
}

**Request**
```json
{
  "type": "update_run_metadata",
  "metadata": {},
}
```

**Response**
```json
    { "status": "200" }
```

---

# Parent Registration Verification

## 12) roarfirekit.verifyParentRegistration()

### Status
**NOT RELATED TO THE ASSESSMENT SDK**

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
| `roarfirekit.startAssessment` | DEPRECATE IN THE NEW MODEL |
| `roarfirekit.completeAssessment` | DEPRECATE IN THE NEW MODEL |
| `roarfirekit.updateAssessmentRewardShown` | DEPRECATE IN THE NEW MODEL |
| `roarfirekit.startAssignment` | DEPRECATE IN THE NEW MODEL |
| `roarfirekit.completeAssignment` | DEPRECATE IN THE NEW MODEL |
| `roarfirekit.verifyParentRegistration` | NOT RELATED TO ASSESSMENT SDK |
| `appkit.startRun` | MIGRATE → `POST /v1/runs` |
| `appkit.writeTrial` | MIGRATE → `events: trial` |
| `appkit.addInteraction` | MANAGED BY WRITE TRIAL |
| `appkit.finishRun` | MIGRATE → `events: complete` |
| `appkit.abortRun` | NOT USED |
| `appkit.updateEngagementFlags` | MIGRATE → `events: reliability` |
| `appkit.validateParameters` | DEPRECATE IN THE NEW MODEL |
| `appkit.updateTaskParams` | DEPRECATE IN THE NEW MODEL |
| `appkit.getStorageDownloadUrl` | NOT USED |
| `appkit.updateUser` | MIGRATE |

---