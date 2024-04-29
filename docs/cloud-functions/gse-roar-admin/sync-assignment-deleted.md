# syncAssignmentDeleted()

#### [syncAssignmentDeleted](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L520)

### Function Name
`syncAssignmentDeleted`

### Trigger
This Cloud Function is triggered by the deletion of a document within the Firestore path `users/{roarUid}/assignments/{assignmentUid}`. It monitors for document deletions to manage related data clean-up and synchronization tasks effectively.

### Operation
Upon detecting the deletion of an assignment document, the function performs several key operations using Firestore transactions:

1. **Retrieval of Deleted Document Data**:
   - Captures data from the deleted assignment document for use in updating related metrics.

2. **Update of Assignment Metrics**:
   - Accesses the `administrations` document related to the deleted assignment to update assignment-related statistics such as "assigned", "started", and "completed" counters.
   - Decrements the respective counters based on the data from the deleted assignment:
     - **Assigned Counter**: Decremented for each organization listed in the assignment's data and for the total.
     - **Started Counter**: Only decremented for tasks that were marked as started.
     - **Completed Counter**: Only decremented for tasks that were marked as completed, considering whether the entire assignment was previously marked as completed.

3. **Update of User Document**:
   - Updates the user's document to remove references to the deleted assignment, specifically deleting dates related to the assignment and removing the assignment ID from arrays tracking assignments' statuses.

### Detailed Workflow

- **Document Deletion Event**: Captures the event where an assignment document under a user profile is deleted.
  
- **Transaction Execution**:
  - **Retrieval of Previous Data**: Fetches data from the deleted document to guide updates.
  - **Metric Adjustments**: Utilizes helper functions to decrement status counters in the `administrations/stats` collection based on the data from the deleted document.
  - **User Document Update**: Adjusts the user's document to reflect the removal of the assignment, ensuring that any reference to the deleted assignment is cleared from tracking fields.

### Error Handling and Security Considerations

- **Error Handling**:
  - Implements robust handling of transaction failures and ensures that all operations are retried up to a limit if they fail initially.
  - Manages potential inconsistencies that may arise if the deletion event does not provide complete data.

- **Security**:
  - Ensures that operations are only triggered by authorized deletions, with checks to prevent unauthorized data manipulation.
  - Validates that only existing and accurate data is used to update counters and user profiles, ensuring integrity in data processing.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.


[//]: # (This function will trigger when an assignment is deleted in a user's assignments subcollection. It serves to update all the places where the assignment is being listed and counted, namely the user's assignments object in the `/users/{userId}` document and the administration's stats document.)

[//]: # ()
[//]: # (When an assignment is deleted, the function will update the user's `assignmentsAssigned` object to remove the assignment ID if found.)

[//]: # ()
[//]: # (The function will also update the administration's stats document at `/administrations/{administrationId}/stats/completion` to no longer count this student. This document keeps track of the number of students who have have been assigned, started, and completed the assignment. This function will update both the total number of students assigned, as well as the number of students from the user's particular organization that have been assigned the administration.)

[//]: # ()
[//]: # (::: tip)

[//]: # (The document IDs in the `/users/{userId}/assignments` collection will always match with the administration they refer to, so when a new file is created we can assume that it is a new assignment to the user.)

[//]: # (:::)