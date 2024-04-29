# createAdministratorAccount()

#### [createAdministratorAccount](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L193)

### Function Name
`createAdministratorAccount`

### Trigger
This Cloud Function is triggered by an `onCall` event, meaning it is directly invoked by client applications.

### Inputs
The function expects a JSON payload with the following parameters:
- **email** (string): The email address for the new administrator account.
- **name** (string): The full name of the new administrator.
- **orgs** (array of strings): A list of organization IDs that the administrator is a member of.
- **adminOrgs** (array of strings): A list of organization IDs that the administrator will have administrator privileges to.
- **isTestData** (boolean, optional): A flag to indicate whether this account is being created for testing purposes. Defaults to `false` if not specified.
- **requesterAdminUid** (string): The UID of the administrator making the request, derived from `request.auth.uid`.

Example JSON input:
```json
{
  "email": "new.admin@example.com",
  "name": "John Doe",
  "orgs": ["org1", "org2"],
  "adminOrgs": ["adminOrg1"],
  "isTestData": false
}
```

### Outputs
The function returns the result from the `createAdminUser` function, which could be:
- A success message or data object indicating that the account has been successfully created.
- An error message or object indicating that the operation failed due to reasons such as invalid input data, database errors, or permission issues.

### Description
The `createAdministratorAccount` function facilitates the creation of new administrator accounts within the system. It is designed to handle the input of essential user details and organizational affiliations, ensuring that new administrators are properly set up with the correct access rights. This function is particularly useful in setups where administrative privileges need to be dynamically managed based on organizational structures.

### Error Handling
Effective error handling should be implemented to manage and log various failure scenarios, including:
- Invalid email format or missing information.
- Database failures, such as connection issues or write failures.
- Permission errors if the requestor does not have adequate rights to create new administrator accounts.
- Handling of any unexpected exceptions.

Errors should be logged with sufficient detail to aid in troubleshooting while avoiding the exposure of sensitive information.

### Security Considerations
- **Authentication**: Ensure that the request is made by an authenticated and authorized user, typically verified through Firebase Authentication.
- **Authorization**: The function should validate that the requester has administrative privileges sufficient to create new administrator accounts, especially in regard to the specified organizational affiliations (`adminOrgs`).
- **Data Validation**: All inputs should be validated for correctness and integrity before processing, including checks for valid email formats and non-null essential fields.

### Deployment
Deploy this function using the Firebase CLI or through the Firebase Console, ensuring that all necessary dependencies and configurations are correctly set up. Include environment-specific configurations and secure handling of any sensitive credentials or data.
