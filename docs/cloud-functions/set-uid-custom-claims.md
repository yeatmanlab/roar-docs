# setuidcustomclaims()

## gse-roar-admin

#### [setuidclaims](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L25), [setUidClaims](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/set-custom-claims.ts#L42)

### Function Name
`setuidclaims`

### Function Overview

#### 1. **setUidClaims**
This backend function is responsible for setting or updating custom claims related to user identifiers in Firebase Authentication and ensuring these identifiers are also stored or updated in Firestore under the corresponding user's document.

##### Operation
- **Input Parameters**:
  - **roarUid**: The ROAR platform-specific user identifier.
  - **adminUid**: The user's unique identifier in the ROAR admin Firebase project.
  - **assessmentUid**: The user's unique identifier in the ROAR assessment Firebase project.
- **Process**:
  - Retrieves the user's current custom claims from Firebase Authentication.
  - Updates Firestore with the `assessmentUid`.
  - Constructs new custom claims and checks if they exceed the storage size limit.
  - Sets new custom claims for the user in Firebase Authentication.
  - Updates or creates a document in the Firestore `userClaims` collection to store these claims.

##### Error Handling
- Manages storage size limitations by checking the size of the stringified new claims.
- Catches and logs errors related to Firebase operations, particularly when setting custom claims or interacting with Firestore.

#### 2. **setuidclaims**
This is the Cloud Function that triggers `setUidClaims`. It is an `onCall` function, designed to be invoked by client applications needing to update or set UID claims for a user.

##### Trigger
- Triggered via an `onCall` request from authenticated clients, passing necessary UIDs as data parameters.

### Detailed Workflow

1. **Initialization**:
   - An authenticated client makes a call to the `setuidclaims` Cloud Function, passing the necessary user identifiers (`roarUid`, `adminUid`, `assessmentUid`).

2. **Execution of setUidClaims**:
   - Retrieves and updates current user claims.
   - Sets updated claims in Firebase Authentication.
   - Synchronizes these changes with Firestore to ensure consistency across the Firebase project and related services.

3. **Response Handling**:
   - The function returns a success response with updated claims if all operations are successful.
   - If the claims exceed storage limits or if any Firebase operation fails, it returns an appropriate error response.

### Error Handling and Security Considerations

- **Error Handling**:
  - Robust handling of Firebase service errors, including Authentication and Firestore errors.
  - Specific checks to ensure custom claims do not exceed Firebase's storage size limits, with errors logged and exceptions thrown accordingly.

- **Security**:
  - Ensures that only authenticated requests can trigger these operations.
  - Validates that the incoming data for UIDs is properly formatted and authentic.

### Deployment and Maintenance

- **Deployment**: These functions should be deployed using Firebase CLI tools or through the Firebase Console, ensuring that all permissions and environment configurations are set correctly.
- **Maintenance**: Monitor the functions for errors and performance issues, particularly looking out for frequent size limit exceedances or synchronization failures. Regular updates may be required to handle changes in Firebase limits or project requirements.
