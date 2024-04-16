# saveSurveyResponses()

#### [saveSurveyResponses](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1147), [writeSurveyResponses](https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/LEVANTE/save-survey-results.ts#L3C1-L28C2)

### Function Overview

#### 1. **saveSurveyResponses**
This Cloud Function is triggered by an `onCall` event, meaning it is explicitly invoked by client applications. It serves as an interface for users to submit survey responses which are then stored by calling the `writeSurveyResponses` function.

##### Trigger
- **Type**: Callable function
- **Authentication**: Requires users to be authenticated as it uses `request.auth.uid` to identify the requesting user.

##### Parameters
- **request**: Contains the user's survey responses and authentication information.

##### Operation
- Calls the `writeSurveyResponses` function, passing the authenticated user's UID and the survey data from the request.

#### 2. **writeSurveyResponses**
A helper function that directly interacts with Firestore to store survey responses in a user-specific document.

##### Parameters
- **requesterUid** (string): The UID of the user submitting the survey.
- **data** (object): The survey responses to be stored.

##### Operation
- Creates a new document under the `surveyResponses` subcollection of the specified user's document.
- Attempts to write the survey data along with a timestamp of creation.

### Detailed Workflow

- **User Submission**:
  - A user submits their survey responses through a client application that calls the `saveSurveyResponses` function.
  
- **Data Handling**:
  - The `saveSurveyResponses` function retrieves the user's UID from the authenticated session and forwards the survey data along with the UID to the `writeSurveyResponses` function.

- **Data Storage**:
  - `writeSurveyResponses` constructs a reference to the appropriate user document and the `surveyResponses` subcollection.
  - A new document is created within this subcollection, and the survey data, along with the creation timestamp, are written to this document.

### Error Handling and Security Considerations

- **Error Handling**:
  - The `writeSurveyResponses` function includes a try-catch block to handle and log any errors that occur during the Firestore write operation.
  - Errors are returned to the caller in a structured response object, indicating success or failure and providing a relevant message.

- **Security**:
  - Ensures that only authenticated users can submit responses, protecting against unauthorized data submissions.
  - Uses Firestore's security rules to further restrict write access to the user's own document, ensuring users cannot write to each other's survey data.

### Deployment and Maintenance

- **Deployment**: Deploy these functions using the Firebase CLI or through the Firebase Console. Ensure that the functions are properly configured to handle expected traffic volumes and data sizes.
  
- **Maintenance**: Regularly monitor the performance and error logs of these functions. Update the error handling and data validation logic as necessary to adapt to new survey formats or changes in user authentication mechanisms.
