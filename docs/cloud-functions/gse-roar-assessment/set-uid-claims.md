# setuidclaims()

#### [setuidclaims](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L25), [setUidClaims](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/set-custom-claims.ts#L42)

### Function Overview

#### 1. **setUidClaims**
This function is a core backend utility designed to update or set custom claims on a user's Firebase Authentication profile. It is crucial for integrating and synchronizing user identities across different segments of the ROAR platform.

##### Parameters
- **roarUid**: The ROAR platform-specific user identifier.
- **adminUid**: The user's unique identifier in the ROAR admin Firebase project.
- **assessmentUid**: The user's unique identifier in the ROAR assessment Firebase project.

##### Operation
- Retrieves the current custom claims of the user.
- Merges new UIDs into the existing claims without overwriting other administrative claims.
- Sets the updated claims on the user's Firebase Authentication profile.
- Updates Firestore `userClaims` document with the new claims if necessary, handling both creation and updates of claims data.

#### 2. **setuidclaims**
This is the Cloud Function that exposes `setUidClaims` as a callable function, enabling client applications to request updates to a user's UIDs and associated claims directly.

##### Trigger
- **Type**: Callable function
- **Authentication**: Requires users to be authenticated to use their UID for updating claims.

### Detailed Workflow

- **User Request**:
  - A client application calls the `setuidclaims` function, passing necessary data such as `roarUid`, `adminUid`, and using the authenticated user's `assessmentUid`.

- **Claim Update Execution**:
  - `setUidClaims` function is invoked with the provided UIDs.
  - Retrieves the user's current custom claims from Firebase Authentication.
  - Constructs new claims and checks for size limitations to ensure compliance with Firebase's storage constraints.
  - Updates the user's authentication profile with the new claims and synchronizes these changes in the Firestore `userClaims` document.

### Error Handling and Security Considerations

- **Error Handling**:
  - Handles errors related to Firebase operations, such as fetching user data or writing to Firestore.
  - Catches and logs errors if the new custom claims exceed Firebase's storage size limit, throwing an appropriate `HttpsError`.

- **Security**:
  - Ensures that only authenticated users can modify their claims, protecting against unauthorized access and manipulation.
  - Validates the format and content of the custom claims to prevent injection attacks or other security vulnerabilities.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.
