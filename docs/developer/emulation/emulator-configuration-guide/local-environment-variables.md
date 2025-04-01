# Local Environment Variables
Running the Firebase emulators and supporting Cypress tests assume that the necessary environment variables are set up on your local machine.

## .env
The `.env` file is used to store environment variables that are used by Firebase App Check and Sentry. The `.env` file should be located in the root directory of the project.
**Note:** The `.env` file should not be committed to the repository. The `.env` file is included in the `.gitignore` file to prevent it from being committed.

The `.env` file should contain the following environment variables:
```dotenv
# Firebase App Check Tokens
APPCHECK_DEBUG_TOKEN='your-app-check-debug-token'

# Sentry Auth Token
SENTRY_AUTH_TOKEN='your-sentry-auth-token'
```

## .env.test
The `.env.test` file is used to store environment variables that are used by the Firebase emulators and Cypress tests. The `.env.test` file should be located in the root directory of the project.
**Note:** The `.env.test` file should not be committed to the repository. The `.env.test` file is included in the `.gitignore` file to prevent it from being committed.

The `.env.test` file should contain the following environment variables:
```dotenv
# Cypress Environment Variables
SUPER_ADMIN_USERNAME='your-super-admin-username'
SUPER_ADMIN_PASSWORD='your-super-admin-password'
SUPER_ADMIN_EMAIL='your-super-admin-email'
SUPER_ADMIN_ID='your-super-admin-id'


# Firebase App Check Tokens
APPCHECK_DEBUG_TOKEN='your-firebase-app-check-debug-token'
```
