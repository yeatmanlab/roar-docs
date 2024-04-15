# mirrorFamilies()

## gse-roar-admin

#### [mirrorFamilies](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1130C5-L1130C9), [generateMirrorDocFunction](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1079)

### Function Name
`mirrorFamilies`

### Trigger
The `mirrorFamilies` function is triggered by document write events on the path `families/{documentId}`, which includes creations, updates, or deletions of documents within the `families` collection.

### Configuration
- **Document Path**: `families/{documentId}`
  - Specifies the Firestore path that triggers the function. It watches for any changes to documents within the `families` collection.
- **Timeout**: 180 seconds
  - This function has an extended execution timeout to accommodate potentially complex or large data operations involved in mirroring documents.

### Operation
The function is instantiated through the `generateMirrorDocFunction`, which is tailored specifically for the `families` collection. It operates under the following mechanism:
1. **Event Listening**: Captures write events to documents in the `families` collection.
2. **Data Handling**:
   - **Deletion**: If a document is deleted (`snapshot.after.data()` is null), the corresponding document in the mirrored collection is also deleted. This maintains consistency and integrity across databases.
   - **Creation/Update**: If a document is added or modified, the function retrieves the new document data and replicates it in the specified mirrored collection using the same document ID.

### Helper Function: generateMirrorDocFunction
- **Purpose**: Creates a Firestore trigger function configured to handle document write events and mirror these changes to a specified collection.
- **Details**: For the `mirrorFamilies` function, it ensures that any modifications in the Firestore `families` collection are immediately and accurately replicated in another designated collection.

### Example Use Cases
- **Document Creation**: When a new family record is added, perhaps representing a new participant group in a study or service, its details are mirrored to ensure all related systems remain up-to-date.
- **Document Update**: Updates to family details, such as changes in family composition or contact information, are synchronized with the mirrored collection.
- **Document Deletion**: When a family record is removed, it is also deleted from the mirrored collection to prevent outdated or inconsistent data across systems.

### Error Handling and Security
- **Error Handling**: Implements robust strategies to manage possible failures during Firestore operations, such as handling null data (deletions) and errors during write operations.
- **Security Considerations**:
  - **Permissions**: The function must have appropriate Firestore permissions to perform read and write operations on the necessary collections.
  - **Data Integrity**: Includes checks to verify the integrity and correctness of the data being mirrored, safeguarding against data corruption.

### Deployment and Maintenance
- **Deployment**: This function should be deployed using Firebase CLI tools or through the Firebase Console. Ensure that all configurations, such as environment variables and Firebase project settings, are accurately set for operational success.
- **Maintenance**: Regular monitoring of the function’s performance and error rates is recommended. Logs should be examined to ensure that data handling errors are addressed promptly, and updates to the function logic or Firestore rules should be applied as necessary.
