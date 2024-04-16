# syncOnRunDocUpdate()

#### [syncOnRunDocUpdate](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L67), [updateBestRunAndCompletion](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/run-update/update-best-run-and-completion.ts#L15)

### Function Overview

#### 1. **updateBestRunAndCompletion**
This function is a core component designed to select the best run for a given task and assignment, and subsequently update the completion status based on runs data.

##### Operation
- **Input Parameters**:
  - **roarUid**: The user identifier.
  - **assignmentId**: The specific assignment identifier.
  - **taskId**: The task identifier associated with the run.
- **Process**:
  - Retrieves all run documents for a specified task and assignment.
  - Determines the best run based on completion status, start times, and assessment scores.
  - Updates the best run and completion status in the assignment document.

##### Example Use
This function is typically called to ensure that after any update or deletion of run documents, the best run and the assignment's completion status are accurately represented in the system.

#### 2. **syncOnRunDocUpdate**
This function triggers whenever there is a write event on run documents under a user's profile. It ensures that any significant change in a run document triggers an update to the best run determination and the overall assignment completion status.

##### Triggers
- **Path**: `users/{roarUid}/runs/{runId}`
  - Activated on creation, update, or deletion of run documents.

##### Process
- **Document Creation**: Calls `updateBestRunAndCompletion` to potentially update the best run and completion status based on the new run data.
- **Document Update**: Re-evaluates the best run and completion if significant fields have changed, avoiding loops from timestamp updates.
- **Document Deletion**: Determines if the deleted document affects the current best run and updates accordingly.

### Detailed Workflow

1. **Run Document Update**:
   - If a run document is updated (e.g., completion of a run or update in scores), `syncOnRunDocUpdate` triggers the `updateBestRunAndCompletion` function to reassess which run is the best for the specific task and to update the assignment's completion status.

2. **Run Document Deletion**:
   - Deletion of a run document also triggers `updateBestRunAndCompletion` to ensure that the removal of a run doesn't leave the assignment with an outdated best run or incorrect completion status.

3. **Run Document Creation**:
   - Upon creation of a new run, the function immediately evaluates whether this new run could potentially be the best run or change the completion status of the assignment.

### Error Handling and Security Considerations

- **Error Handling**:
  - Both functions include robust error handling for database operations, ensuring any failures in read/write operations are logged and managed appropriately.
  - Special considerations are made to handle cases where run documents are deleted or the necessary data for operation is missing or incomplete.

- **Security**:
  - Ensure that only authenticated users can trigger these functions in contexts that are appropriate for their roles, particularly for operations that modify run or assignment data.
  - Data validation is crucial to prevent erroneous data from affecting the system integrity, especially when determining the best run and updating completion statuses.

### Deployment and Maintenance

- **Deployment**: These functions should be deployed using Firebase CLI tools or through the Firebase Console, with careful configuration of environment settings and permissions.
- **Maintenance**: Continuous monitoring and logging are recommended to quickly address any issues that arise due to data inconsistencies or function failures.

These functions play a critical role in maintaining the accuracy and integrity of assessment data within the system, ensuring that users' progress and achievements are reflected in real-time and with high reliability.
