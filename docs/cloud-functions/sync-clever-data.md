# synccleverdata()

## gse-roar-assessment

#### [synccleverdata](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L17), [getCleverData](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/get-clever-data.ts#L256)

### Function Name
`syncCleverData`

### Function Overview

#### 1. **synccleverdata**
This callable Cloud Function is triggered by client requests to sync Clever data. It primarily interfaces with the Clever API to retrieve user data and processes it using the `getCleverData` function.

##### Parameters
- **roarUid**: ROAR-specific user identifier.
- **assessmentUid**: Authentication UID used in the ROAR assessment Firebase project.
- **accessToken**: Access token used for authenticating requests to the Clever API.

##### Operation
- Retrieves user data from Clever using provided credentials.
- Processes and integrates this data into Firebase, adjusting Firestore documents and Firebase Authentication custom claims.

#### 2. **getCleverData**
A helper function that handles the actual data retrieval and integration tasks. It processes Clever API data and updates Firebase user documents and custom claims accordingly.

### Detailed Workflow and Implementation

- **Trigger**: The Cloud Function is triggered by an `onCall` event, indicating a direct request from a client application.
  
- **Data Retrieval**:
  - Uses the Clever access token to authenticate and fetch user details from Clever's `/me` endpoint and other related endpoints.
  - Parses Clever user roles and data, mapping them to corresponding ROAR user types and organizational structures.

- **Data Integration**:
  - Processes Clever user data to update or create Firestore documents under the user's profile.
  - Adjusts Firebase Authentication custom claims to reflect the user's roles and permissions based on Clever data.
  - Ensures data consistency and integrity across Firestore and Firebase Authentication.

### Functions Used in Data Integration

- **importCleverRole**:
  - Maps Clever roles to ROAR user types and updates Firestore documents accordingly.
  - Handles organizational affiliations and updates Firestore collections for districts, schools, and classes as per the user's roles and affiliations in Clever.

- **Data Mapping**:
  - Utilizes mappings like `cleverToRoarUserTypeMap` to translate Clever roles to ROAR-specific user types.
  - Processes organizational data to maintain up-to-date and accurate user profiles in Firestore.

### Error Handling and Security Considerations

- **Error Handling**:
  - Robust error handling for API interactions, ensuring that any failures in data retrieval or processing are logged and handled gracefully.
  - Handles invalid or expired Clever access tokens by returning appropriate error messages.

- **Security**:
  - Validates all incoming data for correctness and security, preventing unauthorized access or manipulation of user data.
  - Uses secure methods for handling access tokens and sensitive user information, ensuring compliance with data protection regulations.

### Deployment and Maintenance

- **Deployment**: Deploy this Cloud Function using Firebase CLI tools or through the Firebase Console, ensuring that it has appropriate permissions to access both Firestore and Firebase Authentication.
  
- **Maintenance**: Monitor the function's performance and error logs to address any operational issues promptly. Update the handling logic as necessary, particularly if changes occur in the Clever API or in organizational role structures.
