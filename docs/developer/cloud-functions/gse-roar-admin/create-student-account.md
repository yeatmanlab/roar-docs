# createstudentaccount()

#### [createstudentaccount](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L150)

### Function Name
`createstudentaccount`

### Trigger
This Cloud Function is triggered by an `onCall` event, meaning it is directly invoked by client applications. It can be called through a specific API endpoint provided by Firebase.

### Configuration
- **Memory Allocation**: The function is configured to use 512 MiB of memory, optimizing it for performance given its workload, which includes handling user data and potentially interacting with external systems like Firebase Authentication and Firestore.

### Inputs
The function expects a JSON payload containing the following parameters:
- **requestingUid** (string): The UID of the user who is making the request, derived from `request.auth.uid`. This is typically the ID of an administrator or a system that has the rights to create student accounts.
- **email** (string): The email address for the student account. This will be used as the primary identifier for the new student.
- **password** (string): The password for the new student's account. This should be handled securely throughout the process.
- **userData** (object): A set of additional data related to the student, which can include name, age, grade, and other relevant information.
- **requireEducationalOrgs** (boolean, optional): A flag indicating whether the student must be associated with specific educational organizations. Defaults to `true` if not provided.

Example JSON input:
```json
{
  "email": "student@example.com",
  "password": "securepassword123",
  "userData": {
    "name": "Student Name",
    "grade": "10"
  },
  "requireEducationalOrgs": true
}
```

### Outputs
The function returns the result from the `createStudent` operation, which could be:
- A success message or data object indicating that the student account has been successfully created.
- An error message or object if the operation fails, detailing the reason for the failure such as invalid input data, database errors, or authorization issues.

### Description
The `createstudentaccount` function is responsible for creating new student profiles within the system. It ensures that all necessary information is collected, validated, and stored securely. The function also checks if the new account needs to be linked with specific educational organizations, depending on the `requireEducationalOrgs` flag.

### Error Handling
Robust error handling should be implemented to address potential issues such as:
- Invalid email formats or insufficient password strength.
- Authentication failures, especially if the requesting UID does not correspond to a user with appropriate privileges.
- Database write failures or connectivity issues.
- Validation failures if `requireEducationalOrgs` is true but no organizational data is provided.

Errors should be securely logged, providing sufficient detail for debugging while ensuring the privacy and security of user data.

### Security Considerations
- **Authentication and Authorization**: Verify that the requesting user is authenticated and authorized to create student accounts.
- **Data Validation**: Rigorously validate all input data to prevent common web vulnerabilities such as SQL injection, especially since email and user data are involved.
- **Secure Data Handling**: Ensure that passwords are handled securely, potentially using Firebase Authentication's built-in mechanisms for password management.

### Deployment
This function is deployed automatically using GitHub actions, whenever changes are merged into the `main` branch.
