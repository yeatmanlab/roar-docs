# mirrorGroups()

## gse-roar-admin

#### [mirrorGroups](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1123), [generateMirrorDocFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1079)

### Function Name
`mirrorGroups`

### Trigger
This Cloud Function is triggered by document write events at the path `groups/{documentId}`. It handles creation, updates, and deletions of documents within the `groups` collection.

### Configuration
- **Document Path**: `groups/{documentId}`
  - This configuration specifies that the function should listen for write operations to any document within the `groups` collection.
- **Timeout**: 180 seconds
  - The function is allowed a generous timeout to handle data operations, which may involve significant data transfer or complex transformations.

### Operation
The `mirrorGroups` function uses the generic `generateMirrorDocFunction` tailored for the `groups` collection. The operation involves:
1. **Event Listening**: Capturing write events (create, update, delete) to documents in the `groups` collection.
2. **Data Handling Strategy**:
   - **On Deletion**: If a document is deleted (indicated by `snapshot.after.data()` being null), the corresponding document in the mirrored collection is also deleted to maintain consistency.
   - **On Creation/Update**: If a document is created or updated, the new data from `snapshot.after.data()` is replicated in the specified mirrored collection using the same document ID.

### Helper Function: generateMirrorDocFunction
- **Purpose**: Generates a configured Firestore trigger function for mirroring changes to documents in a specified collection.
- **Details**: For the `mirrorGroups` function, it creates a specific handler that ensures any changes in the Firestore `groups` collection are immediately and accurately mirrored in another designated collection.

### Example Use Cases
- **Document Creation**: When a new group is formed, perhaps indicating a new project team or a student study group, its details are mirrored to another collection which might be used for analytics or integration with other services.
- **Document Update**: Updates to group details (like membership changes or group name edits) are instantly reflected in the mirrored collection.
- **Document Deletion**: Removal of a group from the primary collection leads to its deletion from the mirrored collection, ensuring data consistency.

### Error Handling and Security
- **Error Handling**: Implements robust error management strategies to handle possible issues during Firestore operations, such as write failures or unauthorized access errors.
- **Security Considerations**:
  - **Permissions**: Proper Firestore permissions must be set to allow the function read and write access to the necessary collections.
  - **Data Integrity**: The function should include mechanisms to verify data integrity during the mirroring process, preventing corruption or unauthorized data manipulation.

### Deployment and Maintenance
- **Deployment**: Deploy using Firebase CLI or through the Firebase Console, making sure all necessary configurations and dependencies are correctly set.
- **Maintenance**: It's crucial to monitor the function's performance and error logs regularly. This helps in quickly identifying and rectifying issues related to data mirroring or function execution anomalies.
