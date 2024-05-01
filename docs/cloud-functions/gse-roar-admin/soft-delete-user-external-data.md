# softDeleteUserExternalData

#### [softDeleteUserExternalData](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1074), [createSoftDeleteCloudFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/soft-delete.ts#L55)

### Function Name
`softDeleteUserExternalData`

### Cloud Function: softDeleteUserExternalData

#### Description
The `softDeleteUserExternalData` function is crafted to archive documents deleted from the `externalData` sub-collection under the `users` collection. It ensures that any deleted external data linked to users is moved to a mirrored "deleted" collection for archival reasons.

#### Trigger Configuration
- **Path**: `users/{doc0}/externalData/{doc1}`
  - This path is dynamically constructed to listen for deletion events specifically within the external data documents stored under individual users.
- **Trigger Collections**: `["users", "externalData"]`
  - The function is configured to monitor the `externalData` nested within the `users` collection for any deletions.

#### Operation
- Upon a deletion event in the specified path, the function:
  - Captures the deleted document's data.
  - Constructs source and target document references using the provided collection and document IDs.
  - Copies the deleted document data from the original location to a newly constructed location within the "deleted" collections (e.g., `deleted-users/deleted-externalData`).

### Utility Functions Used
#### 1. **constructTrigger**
- Constructs the trigger for Firestore document deletion events by creating a Firestore path that responds to deletions within specific collections.
- **Output for `softDeleteUserExternalData`**:
  - **Path**: `users/{doc0}/externalData/{doc1}`
  - **Collections**: `["users", "externalData"]`
  - **ParamKeys**: `["doc0", "doc1"]`

#### 2. **softDeleteCollectionId**
- Adapts collection IDs to refer to corresponding "deleted" collections, facilitating archival operations.
- **Example for `softDeleteUserExternalData`**:
  - Transforms "users" to "deleted-users" and "externalData" to "deleted-externalData".

#### 3. **createDocRefs**
- Generates Firestore document references for both the source document being deleted and the target document in the corresponding "deleted" collection.
- **Operation for `softDeleteUserExternalData`**:
  - Uses path information from the deletion event to create references to both the original and the "deleted" versions of the document.

### Error Handling and Security Considerations
- **Error Handling**:
  - Manages potential read/write operation failures in Firestore robustly, handling errors and ensuring the archival process does not lead to data loss.
  - Checks for null or undefined document data to avoid errors in the archival process.
- **Security**:
  - Validates authorized access for deletion and archival processes, ensuring that operations are secure and comply with data handling policies.
  - Confirms the integrity and existence of data before proceeding, ensuring only valid and authorized operations are executed.

### Deployment and Maintenance
This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.
