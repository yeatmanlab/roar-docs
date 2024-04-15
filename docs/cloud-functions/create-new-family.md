# createnewfamily()

## gse-roar-admin

#### [createnewfamily](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L171)

### Function Name
`createnewfamily`

### Trigger
This Cloud Function is triggered by an `onCall` event, meaning it is invoked directly by client applications through a specific API call.

### Inputs
The function accepts a JSON payload with several parameters necessary to create a new family account:
- **caretakerEmail** (string): The email address of the caretaker, which will be used as a primary identifier and for communications.
- **caretakerPassword** (string): The password for the caretaker's account. It is crucial that this data is handled securely through the function.
- **caretakerUserData** (object): A set of additional user data related to the caretaker, such as name, contact info, and any relevant preferences or settings.
- **children** (array): A list of objects, each containing data about a child within the family. This could include names, ages, and other specific information relevant to the application.
- **isTestData** (boolean, optional): A flag indicating whether this account is being created for testing purposes. Defaults to `false` if not provided.

Example JSON input:
```json
{
  "caretakerEmail": "caretaker@example.com",
  "caretakerPassword": "securepassword123",
  "caretakerUserData": {
    "name": "John Doe",
    "contactInfo": "1234567890"
  },
  "children": [
    {
      "name": "Jane Doe",
      "age": 7
    },
    {
      "name": "Doe Junior",
      "age": 5
    }
  ],
  "isTestData": false
}
```

### Outputs
The function returns the result from the `createFamily` operation, which typically would be:
- A success message or object indicating that the family account has been successfully created.
- An error message or object if the operation fails, detailing the reason for the failure such as invalid input data, database errors, or authentication issues.

### Description
The `createnewfamily` function is responsible for setting up new family profiles in the system. It orchestrates the creation of user accounts for a caretaker and registers associated children under this new family entity. This function ensures that all necessary data is collected, validated, and securely stored in the system’s database.

### Error Handling
The function should include robust error handling to address potential issues such as:
- Invalid email formats or password strength.
- Database write failures or connectivity issues.
- Handling missing or incomplete data in the `caretakerUserData` or `children` fields.
- Security concerns related to data handling and password management.

Errors should be logged to a secure logging service, providing sufficient detail for debugging while ensuring user data privacy.

### Security Considerations
- **Authentication and Authorization**: Ensure that the function can only be accessed by authenticated users who have permission to create new family profiles.
- **Data Validation**: Thoroughly validate all inputs to prevent injection attacks and ensure data integrity.
- **Secure Data Handling**: Use secure practices for handling passwords and personal information, possibly involving hashing passwords before storage and ensuring secure transmission of sensitive data.

### Deployment
Deploy this function using the Firebase CLI or through the Firebase Console. Ensure that the deployment includes configuration for environment variables, secure handling of credentials, and connections to other necessary services like Firebase Authentication and Firestore.
