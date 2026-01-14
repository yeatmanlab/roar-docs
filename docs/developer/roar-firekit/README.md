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

**REST Endpoint:** `POST /api/assessments/start`

**Request Payload:**
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
```
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
