# NPM package

## Preliminary Checklist:

### Researcher
- Ensure the app code is structured appropriately.
- Gather the necessary codebase for integration.

### Developer
This is on the APP SIDE

- If the web app bundles external html, scripts, or strings:
  - Install @rollup/plugin-html and rollup-plugin-string.
- Verify package.json is configured correctly, especially the "name" field.
- ex. "name": "@bdelab/package-name"
- Check both Webpack and Rollup configurations.
- Create staging and production hosting targets on gse-roar-assessment.
- Ensure firebaseConfig.js points to the correct Firebase configs.
- Modify .firebaserc to deploy to the designated targets.
- Update firebase.json to include deploy targets and bundling configurations.
- Set up GitHub actions for PR link deployment, Cypress testing, staging deployment, and npm publishing.
- Add necessary secrets to the GitHub repository for npm auth token, Firebase service account, Cypress, and Sentry.


## Create projects in platforms

### Sentry Dashboard
1. Enter the Sentry dashboard with your account
2. Go to "Projects" and select "Create Project"
3. Select Browser Javascript
4. For the frequencies select "I'll create my own alerts later"
5. Add the project name and the team "#roar"
6. Once the project is created, go to the configurations of the project and copy the "Client Keys (DSN)"


### Cypress Dashboard
1. Enter the Cypress dashboard with your account
2. Go to "Projects" and select "New Project"
3. Add the project name and select "Private"
4. For the tests create only "test-pr"


## Sentry Integration
- Install Sentry packages:

``` javascript
npm install @sentry/browser@latest
npm install @sentry/integrations@latest
npm install @sentry/wasm@latest
npm install @sentry/rollup-plugin
npm install @sentry/webpack-plugin

```

Once you run this, copy the secret keys for:

- CYPRESS_RECORD_KEY
- FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT
- NPM_TOKEN
- SENTRY_AUTH_TOKEN
- SENTRY_ORG
- SENTRY_PROJECT


**Sentry wizard for readable source maps:**

1. Run the Sentry wizard for readable source maps:

    ```bash
    npx @sentry/wizard@latest -i sourcemaps
    ```

   For both webpack and rollup configurations.

**index.js:**

- Remove the "fromDashboard" if statement and always initialize Sentry.

**serve.js:**

- Remove `initSentry` from `serve.js`.

**sentry.js:**

- Copy the file but keep the DSN URL.

**Webpack Config:**

- Update the devtool configuration.

**package.json:**

- Add a `preserve:prod` script.

**GitHub Actions:**

- Add Sentry Release GitHub action to each repo.

**GitHub Environment Variables:**

- Add `SENTRY_AUTH_TOKEN` to GitHub.  
  `SENTRY_AUTH_TOKEN = get from internal integration`  
  `SENTRY_ORG = roar-89588e380`  
  `SENTRY_PROJECT = project name`



## Monitoring
- Set up Sentry projects and configurations.
- Configure Cypress projects.