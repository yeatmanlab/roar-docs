# syncAssignmentsOnUserUpdate()

#### [syncAssignmentsOnUserUpdate](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L287), [syncAdministrationsAssignments](https://github.com/yeatmanlab/roar-firebase-functions/blob/main/gse-roar-admin/functions/src/sync-administrations-assignments.ts)

#### **#TODO: Document helper functions within this cloud function.**

### Function Name
`syncAssignmentsOnUserUpdate`

### Trigger
This Cloud Function is triggered by any write event (creation, update, or potentially deletion) on documents within the Firestore path `users/{roarUid}`.

### Operation
Upon detecting a change to a user document, the function evaluates changes in organizational affiliations and updates assignments accordingly:

1. **Data Retrieval**:
   - Extracts previous and current data from the user document to identify changes in organizational affiliations.

2. **Organizational Affiliation Processing**:
   - Determines the organizational units (`orgs`) that the user is currently affiliated with and any changes that have occurred since the last update.
   - Specifically handles organizational data structured with `all`, `current`, and `dates` fields, focusing on the `current` affiliations.

3. **Change Detection and Processing**:
   - Identifies and processes any added or removed organizational affiliations.
   - Calls specific processing functions (`processUserRemovedOrgs` and `processUserAddedOrgs`) to handle these changes appropriately.

### Detailed Workflow

- **Event Detection**: Captures any creation, update, or modification to a user's document.
  
- **Change Analysis**:
  - Uses utility functions like `_pick`, `_fromPairs`, and `_difference` to extract and compare organizational affiliations from previous and current document states.
  - Logs changes for debugging and tracking purposes.

- **Conditional Processing Based on User Type**:
  - Ensures that the function only processes changes for users identified as "students", who are the primary subjects of organizational affiliation management.

- **Organizational Changes Handling**:
  - **Removed Organizations**: If any organizations are removed from the user's current affiliations, the related tasks and assignments are processed to reflect this change.
  - **Added Organizations**: Similarly, if new organizations are added to the user's affiliations, related assignments and tasks are updated or added.

### Error Handling and Security Considerations

- **Error Handling**:
  - Robust error handling during data extraction and processing to manage partial updates or incomplete data scenarios.
  - Transactional updates ensure consistency across related database operations.

- **Security**:
  - Validates that operations are performed based on authenticated and authorized changes to prevent unauthorized data manipulation.
  - Ensures that sensitive operations related to user data handling comply with privacy regulations and organizational policies.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.

[//]: # (This function is designed to sync globally defined administrations with user-sepcific assignments.)

[//]: # ()
[//]: # (This function will trigger when user documents &#40;`/user/{userId}`&#41; are written to. This function will perform actions only on documents with the userType field set to `student`. If so, the function will check the user's organizations. If they've changed, the function will add or remove assignments corresponding to the changed organizations. For example, if the user is assigned an administration from school1, then is removed from school1, this function will trigger, detect that removal, and remove the assignment that was assigned to school1. Similarly, if the user was not originally assigned to school1 then added to the organization, this function will trigger and add the assignment to the user's `/user/{userId}/assignments` subcollection.)
