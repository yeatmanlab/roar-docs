# mirrorSchools()

#### [mirrorSchools](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1109), [generateMirrorDocFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1079)

### Function Name
`mirrorSchools`

### Trigger
This Cloud Function is triggered by document write events (create, update, delete) on Firestore documents located at `schools/{documentId}`. The function is set up to handle changes to any document within the `schools` collection.

### Configuration
- **Document Path**: `schools/{documentId}`
  - This specifies the path to the Firestore documents in the `schools` collection that will trigger the function when written to.
- **Timeout**: 180 seconds
  - The function has a longer execution timeout to handle potentially large or complex operations.

### Operation
The `mirrorSchools` function uses the `generateMirrorDocFunction` to create a specific instance tailored for the `schools` collection. Here’s how it functions:
1. **Listening to Document Changes**: The function listens for any write operations (including deletions) on the `schools` collection.
2. **Handling Changes**:
   - If a document in the `schools` collection is deleted (`snapshot.after.data()` is null), the corresponding document in the mirrored collection is also deleted.
   - If a document is created or updated, the new data from `snapshot.after.data()` is used to update or create the document in the mirrored collection using the same document ID.

### Example Execution Flow
- **Document Created/Updated**: When a school document is created or updated, the function ensures that its data is replicated in another specified collection for assessment or administrative purposes.
- **Document Deleted**: If a school document is deleted, the function also deletes the corresponding document in the mirrored collection to maintain data consistency.

### Helper Function: generateMirrorDocFunction
- **Purpose**: Dynamically generates a function configured to handle document write events and mirror these changes to a specified collection.
- **Usage in `mirrorSchools`**:
  - The generated function from `generateMirrorDocFunction("schools")` specifically handles the mirroring of the `schools` collection documents.

### Error Handling and Security
- **Error Handling**: Implements checks for null data and handles database operations with try/catch blocks to manage exceptions gracefully.
- **Security Considerations**:
  - **Permissions**: Ensure that the function has appropriate Firestore permissions to perform read and write operations on the `schools` collection and its mirror.
  - **Data Validation**: While primarily handled by Firebase rules, additional validation can be implemented within the function to prevent corrupt or invalid data mirroring.

### Deployment and Maintenance
- **Deployment**: This function should be deployed using Firebase CLI tools or through the Firebase Console, ensuring all configurations and dependencies are correctly set.
- **Maintenance**: Regular monitoring and logging are recommended to track function performance and to quickly address any issues with data mirroring or function execution.
