# mirrorCustomClaims

#### [mirrorCustomClaims](https://github.com/yeatmanlab/roar-firebase-functions/blob/3b169713da20eecc55fb6365f555f984706799c7/gse-roar-admin/functions/src/index.ts#L928)

### Function Name
`mirrorCustomClaims`

#### **mirrorCustomClaims**
This Cloud Function triggers on document changes in the `userClaims` collection. It ensures that any updates to claims are accurately reflected in Firebase Authentication custom claims and corresponding Firestore documents in both the admin and assessment databases.

##### Trigger
- **Type**: Document written (includes created, updated, or deleted).
- **Path**: `userClaims/{targetUid}`

##### Operation
- Checks for data existence and manages data integrity to avoid processing deletions or irrelevant updates.
- Synchronizes custom claims across Firebase Authentication in both admin and assessment projects.
- Updates Firestore documents based on the roles defined in the claims, particularly for administrative roles.

### Detailed Workflow

1. **Preliminary Checks**:
   - Verifies that the snapshot exists to avoid processing deletions or null data.
   - Skips updates triggered by changes to the `lastUpdated` field to prevent infinite loops.

2. **Data Processing**:
   - Extracts current and previous claims data from the document snapshot.
   - Identifies if the document was deleted and skips further processing if true.

3. **Custom Claims Synchronization**:
   - Filters and prepares custom claims for synchronization, removing any admin organization specifics that should not be in Firebase Authentication custom claims.
   - Serializes the claims and checks for size constraints to ensure they don't exceed Firebase's custom claims size limit.
   - Updates Firebase Authentication custom claims for both admin and assessment UIDs associated with the user.

4. **Firestore Document Updates**:
   - In case of administrative privileges (either super_admin or having administrative organizations), performs additional data checks and updates:
     - Retrieves and sets exhaustive and minimal administrative organizations from Firestore transactions.
     - Updates the user's type to "admin" in Firestore documents if applicable.
     - Ensures that the changes are reflected in both admin and assessment Firestore databases.

5. **Error Handling and Security Considerations**:
   - Implements error logging for significant steps and potential failure points, particularly during API calls and database transactions.
   - Ensures that operations are secure and consistent, utilizing transactions for all Firestore updates to maintain atomicity.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.

### Potential Enhancements

- **Optimization of Data Checks**: Refine the checks for data changes to minimize unnecessary executions and optimize database operations.
- **Enhanced Role Management**: Implement more granular role and permission checks to handle complex organizational hierarchies and permissions.
