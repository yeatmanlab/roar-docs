# createLevanteGroup()

#### [createLevanteGroup](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1153), [createGroup](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/LEVANTE/create-group.ts#L8)

### Function Name
`createLevanteGroup`

#### 1. **createLevanteGroup**
This callable Cloud Function acts as an interface for client applications to request the creation of new groups. It verifies user authentication, extracts the necessary data from the request, and delegates the group creation task to the `createGroup` function.

##### Trigger
- **Type**: Callable function
- **Authentication**: Requires users to be authenticated; accesses the user's UID through `request.auth.uid`.

##### Parameters
- **request**: The client request containing the data necessary for group creation:
  - `groupData`: Data for the new group (e.g., name, description).

##### Operation
- Extracts user ID and group data from the incoming request.
- Calls the `createGroup` function with the extracted information.

#### 2. **createGroup**
A backend utility function that performs the actual creation of the group document in Firestore and manages related security operations such as updating custom claims and Firestore documents to reflect new group memberships.

##### Parameters
- **requestingUid**: The UID of the user requesting the creation of the group.
- **groupData**: The data for the new group.

##### Operation
- Verifies that the user has administrative privileges.
- Creates a new document in the `groups` collection with the provided `groupData`.
- Updates Firebase Authentication custom claims and the Firestore `userClaims` document to reflect the new group membership.

### Detailed Workflow

1. **User Authentication and Authorization**:
   - Verifies that the user making the request has appropriate administrative privileges (`super_admin` or `admin`).
   - Retrieves and checks existing custom claims to confirm the user's rights to create a group.

2. **Group Document Creation**:
   - Initializes a new document in the `groups` collection.
   - Sets the group data into this new document, handling errors that might occur during this process.

3. **Custom Claims and Firestore Document Updates**:
   - Retrieves the user's current authentication claims.
   - Adds the new group's ID to the user's list of administered groups in both their Firebase Authentication custom claims and their Firestore `userClaims` document.
   - Ensures that these updates are atomically committed to maintain data consistency.

### Error Handling and Security Considerations

- **Error Handling**:
  - Catches and logs errors at each critical operation, such as retrieving user claims, creating group documents, and updating claims.
  - Provides detailed error messages to help diagnose issues, particularly focusing on permission errors and database operation failures.

- **Security**:
  - Ensures all operations are performed under strict authentication and authorization checks to prevent unauthorized access or modifications.
  - Uses secure methods to update Firestore and Firebase Authentication, protecting against potential data breaches or unauthorized data alterations.

### Deployment and Maintenance

- **Deployment**: These functions should be deployed using the Firebase CLI or through the Firebase Console, ensuring they are configured with the necessary permissions and resources to handle expected traffic and data sizes.
  
- **Maintenance**: Regularly monitor these functions for performance issues and errors. Update the security policies and logic as necessary, especially in response to changes in organizational roles or user privileges.
