# createLevanteUsers()

#### [createLevanteUsers](), [createUsers](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/LEVANTE/create-users.ts#L63)

### Function Name
`createLevanteUsers`

### Function Overview

#### 1. **createLevanteUsers**
This callable Cloud Function is designed to facilitate batch user creation processes initiated from client applications. It serves as an entry point to orchestrate user creation workflows using provided user data.

##### Trigger
- **Type**: Callable function.
- **Authentication**: Requires users to be authenticated; accesses the user's UID through `request.auth.uid`.

##### Parameters
- **request**: Contains the authenticated user's UID and the batch of user data to be processed:
  - `userData`: Array of user data objects each containing information required to create individual user accounts.

##### Operation
- Extracts the requesting user's UID and user data from the request.
- Invokes the `createUsers` function to handle the creation of user accounts and associated processes.

#### 2. **createUsers**
A backend utility function that executes the user creation logic including authentication record creation, Firestore document setups, and relationship mapping.

##### Parameters
- **requestingId**: The UID of the user initiating the request.
- **userData**: Array of user data objects for which user accounts are to be created.

##### Operation
- Validates and processes each user object from the userData array to create authentication records in Firebase Auth and corresponding user documents in Firestore.
- Handles errors, retries, and relationship mappings based on the user data provided.

### Detailed Workflow

1. **Initial Setup**:
   - Retrieves configurations and instances necessary for Firebase operations, such as Firestore and Firebase Auth references.

2. **User Processing**:
   - Iteratively processes each user object from `userData` to generate unique emails and passwords.
   - Creates Firebase Auth user records for each user object.
   - On successful creation, further processes to set up Firestore documents for both administrative and assessment purposes.

3. **Error Handling and Retries**:
   - Implements error handling for scenarios like existing emails, and retries the creation with new credentials.
   - Manages retries up to a specified maximum attempt count to avoid infinite loops.

4. **Relationship Mapping**:
   - Post user creation, maps relationships based on the user roles defined in the user data (e.g., linking children with parents and teachers).

5. **Firestore Document Creation**:
   - Sets up user documents in Firestore with necessary data stripped of sensitive information like passwords.
   - Applies user type-specific logic, such as assigning groups to students.

### Error Handling and Security Considerations

- **Error Handling**:
  - Robust handling of authentication errors, particularly those related to duplicate emails.
  - Logs detailed error messages at each step to aid in diagnosing issues.

- **Security**:
  - Ensures all operations are performed under strict authentication checks to prevent unauthorized access.
  - Validates and sanitizes user input to prevent injection attacks and ensure data integrity.

### Deployment and Maintenance

- **Deployment**: Deploy these functions using Firebase CLI tools or through the Firebase Console, ensuring they have the necessary permissions to access Firestore and Firebase Authentication.

- **Maintenance**: Monitor these functions' performance and error logs to quickly address any operational issues. Update the logic as necessary, especially in response to changes in the data schema or security requirements.
