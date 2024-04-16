# syncAssignmentsOnAdministrationUpdate()

#### [syncAssignmentsOnAdministrationUpdate](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L231), [syncAdministrationsAssignments](https://github.com/yeatmanlab/roar-firebase-functions/blob/main/gse-roar-admin/functions/src/sync-administrations-assignments.ts)

#### **#TODO: Document helper functions within this cloud function.**

### Function Name
`syncAssignmentsOnAdministrationUpdate`

### Trigger
This Cloud Function is triggered by any write event (creation, update, or deletion) on documents within the `administrations/{administrationId}` path in Firestore.

### Configuration
- **Document Path**: `administrations/{administrationId}`
  - This specifies the Firestore path that triggers the function.
- **Memory Allocation**: 2 GiB
  - The function is configured with a high memory allocation to handle potentially large data operations involved in processing administration documents.

### Operation
The function executes different operations based on the nature of the document event:
1. **Document Deletion**:
   - Handles the removal of administration-related data from organizational documents and user profiles.
   - Updates the creator's document to remove the administration from their list of created administrations.
   - Processes additional clean-up operations through `processRemovedAdministration`.

2. **Document Creation**:
   - Assigns all relevant organizational users to the new administration.
   - This operation is managed by the `processNewAdministration` function which takes the new administration data and applies necessary updates.

3. **Document Modification**:
   - Adjusts assignments and other related data based on changes in the administration document.
   - This is handled by `processModifiedAdministration`, which compares previous and current data to determine necessary updates.

### Detailed Workflow

- **Document Deletion**:
  - Fetches previous data from the administration document.
  - Removes references to the deleted administration from associated organizational documents.
  - Optionally, updates the creator's document to reflect the removal of the administration.

- **Document Creation**:
  - Directly processes the new administration data to associate it with relevant organizational units and users.

- **Document Modification**:
  - Compares previous and current data to identify changes.
  - Updates organizational assignments and other related metrics as needed based on the changes detected.

### Error Handling and Security Considerations

- **Error Handling**:
  - Includes error checks and logging at each step to ensure that failures in database operations are caught and handled gracefully.
  - Uses transactions and batch operations to ensure data integrity across multiple document updates.

- **Security**:
  - Ensures that the function operates under authenticated conditions and that operations are authorized based on user roles and permissions.
  - Validates all incoming data for consistency and to prevent unauthorized data manipulation.

### Deployment and Maintenance

- **Deployment**: Deploy this function using Firebase CLI tools or through the Firebase Console, ensuring that memory settings and trigger paths are correctly configured.
- **Maintenance**: Monitor the function’s performance and error logs to address any operational issues promptly. Regular updates may be necessary to adapt to changes in the data schema or to optimize performance.

This function plays a critical role in maintaining the integrity and consistency of administration-related data within the system. It ensures that organizational structures and user assignments reflect the most current state of administration documents, which is crucial for accurate data representation and user management.

[//]: # (This function is designed to sync globally defined adminstrations with user-specific assignments.)

[//]: # ()
[//]: # (Administrations are globally defined, while assignments are specific to each user. This function determines all assigned users and syncs the globally defined adminstration data with their local assignment data.)

[//]: # ()
[//]: # (It also checks to see that the list of assigned orgs is exhaustive. By "exhaustive," we mean that any organization in the administration's org list must have each of it's dependent organizations explicitly listed in the same administration's org list. For example, if district1 is in the `districts` list and district1 contains schools A and B. Then schools A and B should also be in the `schools` list of the administration. Likewise if school A contains classes alpha and beta, then classes alpha and beta should also be in the administration's `classes` list. This function ensures that org lists are exhaustive. Because this function both writes to and is triggered by changes to the administration document, we check to prevent infinite loops where document change -> function trigger -> document change, and so on.)
