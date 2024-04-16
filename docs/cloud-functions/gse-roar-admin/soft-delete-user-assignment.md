# softDeleteUserAssignment()

#### [softDeleteUserAssignment](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1070), [createSoftDeleteCloudFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/soft-delete.ts#L55)

### Function Name
`softDeleteUserAssignment`

#### Description
The `softDeleteUserAssignment` function is designed to handle deletions within the nested `users` and `assignments` collections by preserving deleted documents in a corresponding "deleted" collection. This function is generated using the `createSoftDeleteCloudFunction`, which configures it to respond to document deletions in a path that encompasses both user and assignment identifiers.

#### Trigger Configuration
- **Path**: `users/{doc0}/assignments/{doc1}`
  - This path is dynamically constructed to listen for deletion events within the nested structure where assignments are sub-documents under specific users.
- **Trigger Collections**: `["users", "assignments"]`
  - Indicates that the function will monitor deletions from the `assignments` sub-collection under the `users` collection.

#### Operation
- Upon detecting a deletion event in the specified path, the function:
  - Retrieves the deleted document's data.
  - Constructs source and target document references using the provided collection and document IDs.
  - Copies the deleted document data from the source to the target location, which is in the corresponding "deleted" collections (e.g., `deleted-users/deleted-assignments`).

### Utility Functions Used
#### 1. **constructTrigger**
- Constructs the trigger for Firestore document deletion events by creating a Firestore path that listens for deletions within specified collections.
- **Example Output for `softDeleteUserAssignment`**:
  - **Path**: `users/{doc0}/assignments/{doc1}`
  - **Collections**: `["users", "assignments"]`
  - **ParamKeys**: `["doc0", "doc1"]`

#### 2. **softDeleteCollectionId**
- Modifies collection IDs to refer to their corresponding "deleted" collections.
- **Example for `softDeleteUserAssignment`**:
  - Converts "users" to "deleted-users" and "assignments" to "deleted-assignments".

#### 3. **createDocRefs**
- Generates Firestore document references for both the source document being deleted and the target document in the "deleted" collection.
- **Operation for `softDeleteUserAssignment`**:
  - Uses path information from the deletion event to create references to both the original and the "deleted" versions of the document.

### Error Handling and Security Considerations
- **Error Handling**:
  - Ensures robust error management for read/write operations to Firestore, handling potential failures gracefully.
  - Includes checks for null or undefined document data, which could indicate issues in the deletion trigger execution.
- **Security**:
  - The function ensures operations are conducted within the scope of authorized access, preventing unauthorized data copying or exposure.
  - Validation steps confirm the integrity and existence of data before proceeding with the copying process.

### Deployment and Maintenance
- **Deployment**: This function should be deployed using Firebase CLI tools or through the Firebase Console, with careful attention to ensuring correct trigger paths and permissions.
- **Maintenance**: Regular monitoring is crucial to address any functional or performance issues. Logs should be reviewed to ensure the function operates as expected and that no data integrity issues arise.
