# syncAssignmentCreated()

## gse-roar-admin

#### [syncAssignmentCreated](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L441)

### Function Name
`syncAssignmentCreated`

### Trigger
This Cloud Function is triggered by the creation of a document within the Firestore path `users/{roarUid}/assignments/{assignmentUid}`. It specifically listens for new assignments being added under individual user profiles.

### Operation
Upon detecting the creation of an assignment document, the function executes several operations:

1. **Data Retrieval**: It retrieves the newly created assignment's data from the snapshot provided by the event trigger.
  
2. **Database Transactions**:
   - **User Document Update**: Updates the user document to include the new assignment in the list of assignments. This is achieved by:
     - Adding the assignment UID to an array field for tracking assigned assignments.
     - Storing or updating the date when the assignment was assigned.
   - **Assignment Statistics Update**: Manages statistics related to assignment completion across different organizational contexts within the `administrations` collection. It updates or increments the "assigned" status for the assignment across various organizational levels and the total count.

3. **Logging**: Outputs debug statements to trace the function's execution and provide insights into the processing stages and any issues encountered.

### Detailed Workflow

- **Assignment Document Creation**:
  - Captures the event when a new assignment document is created.
  - Extracts necessary details such as `roarUid`, `assignmentUid`, and assignment data from the event context and document snapshot.

- **First Transaction**:
  - Constructs references to the user's document.
  - Updates the user's document to reflect the newly assigned assignment, ensuring that the assignment's presence is recorded and its assigned date is noted.

- **Second Transaction**:
  - Accesses the completion stats document related to the assignment.
  - Updates the "assigned" counts for the relevant organizational units and the overall total, ensuring that the assignment creation is fully integrated into organizational tracking and statistics.

### Error Handling and Security Considerations

- **Error Handling**:
  - Implements robust transaction handling to manage potential failures in database operations.
  - Uses retries and error logging to ensure that each step of the data synchronization is attempted reliably, with detailed logs for diagnosing issues.

- **Security**:
  - Ensures that the function operates under authenticated conditions, where only valid and authorized changes trigger data updates.
  - Validates data integrity and consistency before applying updates to prevent corrupt or unintended changes from propagating.

### Deployment and Maintenance

- **Deployment**: This function should be deployed using Firebase CLI tools or through the Firebase Console, ensuring all configurations and permissions are correctly set for accessing and modifying Firestore documents.
  
- **Maintenance**: Regular monitoring of this function's operations is recommended to quickly identify and address any performance issues or errors. Logs should be reviewed to ensure that the function performs as expected and adjustments should be made as needed based on observed operational trends or changes in data structure.


[//]: # (This function will trigger when an assignment is created in a user's assignments subcollection. It serves to update all the places where the assignment is being listed and counted, namely the user's assignments object in the `/users/{userId}` document and the administration's stats document.)

[//]: # ()
[//]: # (When an assignment is created, the function will update the user's `assignmentsAssigned` object with the new assignment ID.)

[//]: # ()
[//]: # (The function will also update the administration's stats document at `/administrations/{administrationId}/stats/completion`. This document keeps track of the number of students who have have been assigned, started, and completed the assignment. This function will update both the total number of students assigned, as well as the number of students from the user's particular organization that have been assigned the administration.)

[//]: # ()
[//]: # (::: tip)

[//]: # (The document IDs in the `/users/{userId}/assignments` collection will always match with the administration they refer to, so when a new file is created we can assume that it is a new assignment to the user.)

[//]: # (:::)