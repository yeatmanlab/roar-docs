# softDeleteGuest()

#### [softDeleteGuest](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L44), [createSoftDeleteCloudFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/soft-delete.ts#L55)

### Function Name
`sotDeleteGuest`

#### 1. **createSoftDeleteCloudFunction**
This utility function dynamically generates Cloud Functions designed to handle the soft deletion of documents by moving them to corresponding "deleted" collections when they are deleted from their primary collection.

##### Operation
- **Constructs a Trigger**: Uses the `constructTrigger` function to create a Firestore trigger based on specified collections.
- **Document Movement**: On the deletion of a document, the generated function moves the document to a new path within a "deleted" collection, preserving its content.

#### 2. **softDeleteGuest**
A specific instance of a Cloud Function generated by `createSoftDeleteCloudFunction`, tailored for handling deletions within the `guests` collection.

### Detailed Workflow and Implementation

- **Trigger Construction** (`constructTrigger`):
  - Accepts an array of collection names and constructs a Firestore document path that listens for deletion events within these collections.
  - Maps each collection to a document path variable (`doc0`, `doc1`, etc.), creating a structured path like `guests/{doc0}` for the `softDeleteGuest` function.

- **Document References Creation** (`createDocRefs`):
  - Generates Firestore document references for both the source (original) and target (deleted) locations based on the provided collection and document IDs.
  - Ensures that the document data is accurately transferred from the source path to the appropriately named "deleted" collection path.

- **Soft Deletion Handling**:
  - On a document's deletion, retrieves the document's data.
  - If data exists, moves it to the corresponding "deleted" collection, effectively archiving the document while maintaining its integrity and availability for future needs.

### Error Handling and Security Considerations

- **Error Handling**:
  - Includes robust error handling during document transfer operations, ensuring that failures in moving data are logged and addressed.
  - Handles potential null data scenarios gracefully, ensuring the function does not fail unexpectedly.

- **Security**:
  - Ensures that operations are performed within the bounds of authorized access, using security rules that restrict deletion and archival actions to authorized users only.
  - Validates document paths and operations to prevent unauthorized access or manipulation of document data.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.