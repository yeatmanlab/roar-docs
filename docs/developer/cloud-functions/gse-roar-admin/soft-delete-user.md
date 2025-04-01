# softDeleteUser()

#### [softDeleteUser](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1069), [createSoftDeleteCloudFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/soft-delete.ts#L55)

### Function Name
`softDeleteUser`

### Utility Functions Overview

#### 1. **constructTrigger**
This function dynamically constructs a Firestore trigger configuration based on specified collections.

- **Parameters**:
  - **triggerCollections** (array of strings): A list of collection names that determine the Firestore path to be monitored.
- **Returns**:
  - An object of type `ITrigger` that includes:
    - **collections**: The original list of collection names.
    - **path**: A constructed Firestore path that represents a document path pattern for the trigger.
    - **paramKeys**: A list of parameter keys that will be extracted from the path during the trigger event.

#### 2. **softDeleteCollectionId**
Generates a name for a "deleted" version of a collection.

- **Parameter**:
  - **collectionId** (string): The original collection's identifier.
- **Returns**:
  - A string representing the corresponding "deleted" collection's name.

#### 3. **createDocRefs**
Constructs Firestore document references for both source and target documents based on given IDs.

- **Parameters**:
  - **db** (Firestore): An instance of Firestore.
  - **collectionIds** (array of strings): Original collection names.
  - **docIds** (array of strings): Document identifiers corresponding to the collections.
- **Returns**:
  - An object containing Firestore document references for both the source and target paths.

### Cloud Function Template: createSoftDeleteCloudFunction

- **Purpose**: To create a Cloud Function configured to handle document deletions by copying deleted documents into a corresponding "deleted" collection.
- **Input**:
  - **triggerCollections** (array of strings): Specifies which collections to apply the soft delete functionality.
- **Operation**:
  - Utilizes `constructTrigger` to set up a Firestore document deletion trigger.
  - Upon triggering, retrieves the deleted document data and copies it to a newly constructed "deleted" collection path.

### Example Cloud Function: softDeleteUser

#### Trigger
- **Path**: Triggered by document deletions in the `users/{doc0}` path, automatically constructed by the utility functions to monitor the `users` collection for deletions.

#### Process
- **Document Deletion**:
  - When a document in the `users` collection is deleted, the function captures the deletion event.
  - It constructs the document references for both the original and the corresponding "deleted" collection.
  - Copies the deleted document data from the `users` collection to `deleted-users`.

### Error Handling and Security Considerations

- **Error Handling**:
  - Manages potential failures in document read or write operations, ensuring robust logging and error reporting.
  - Handles cases where the document might already be deleted or where document data is null.

- **Security**:
  - Ensures that the function operates under secure conditions, using authenticated instances of Firestore.
  - Validates paths and permissions to prevent unauthorized data manipulation.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.
