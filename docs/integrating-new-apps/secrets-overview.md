# Secrets in the GitHub Repository
In order for our apps to work properly, we need to add some secret keys to the GitHub repository. These keys are used for various integrations and services that the app relies on. The following keys need to be added to the GitHub repository secrets:

1. **CYPRESS_RECORD_KEY**
   - Generated from the initial configuration of Cypress and used for recording test results and reports
2. **FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT**
   - Generated from the Firebase console and used for Firebase authentication
3. **NPM_TOKEN**
   - Generated from the npm console and used for automatic publishing to npm
4. **SENTRY_AUTH_TOKEN**
   - Generated from the Sentry Wizard and used for error tracking and monitoring
5. **SENTRY_ORG**
   - The organization name for the Sentry project, in our case `roar-89588e380`
6. **SENTRY_PROJECT**
   - The project name for the Sentry project
