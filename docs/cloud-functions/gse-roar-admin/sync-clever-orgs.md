# syncCleverOrgs()

#### [syncCleverOrgs](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L76), [cleverSyncOrgs](https://github.com/yeatmanlab/roar-firebase-functions/blob/main/gse-roar-admin/functions/src/clever-sync-orgs.ts)

#### **#TODO: Document helper functions within this cloud function.**

### Function Name
`syncCleverOrgs`

### Trigger
This Cloud Function is triggered by an `onCall` event, meaning it is explicitly invoked by a client application, typically through an administrative interface or scheduled task.

### Configuration
- **Timeout**: 3600 seconds (1 hour)
  - This extended timeout setting accommodates potentially lengthy operations involved in syncing large datasets from external sources such as Clever.

### Operation
The function performs the following key operations:

1. **Authentication and Authorization**:
   - Confirms that the request comes from an authenticated user by checking `request.auth.uid`.
   - Validates that the requesting user has `super_admin` privileges by examining custom claims in Firestore's `userClaims` collection.

2. **Data Synchronization**:
   - Calls the `syncDistricts` function, passing the `shallow` flag, which dictates whether a shallow or deep sync should be performed. A shallow sync might fetch less data or perform fewer updates to reduce processing time and resource usage.

### Parameters
- **requesterUid** (string): UID of the user making the request, obtained from the authenticated session.
- **shallow** (boolean): An optional parameter that controls the depth of the synchronization process, defaulting to true for a less intensive operation.

### Detailed Workflow

- **User Verification**:
  - Retrieves the custom claims for the requesting user to ensure they have the necessary administrative rights to perform data synchronization tasks.

- **Error Handling for Authorization**:
  - If the user does not have `super_admin` status, the function throws an `HttpsError` with the message "permission-denied," indicating that the operation cannot proceed due to insufficient permissions.

- **Synchronization Execution**:
  - If the user is authorized, the function proceeds to invoke the `syncDistricts` function, which handles the specifics of the data synchronization with the Clever platform.

### Error Handling and Security Considerations

- **Error Handling**:
  - Includes comprehensive checks for user authentication and authorization to prevent unauthorized access to the synchronization feature.
  - Proper error handling for external API interactions, ensuring that failures in data retrieval or processing are gracefully managed and logged.

- **Security**:
  - Ensures that only users with `super_admin` claims can trigger the synchronization, protecting sensitive operations from unauthorized access.
  - Implements robust validation of all incoming data and parameters to prevent injection attacks or other security vulnerabilities.

### Deployment and Maintenance

This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.
