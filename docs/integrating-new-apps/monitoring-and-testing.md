# Monitoring and Testing
All ROAR apps and the ROAR Dashboard must be monitored and tested. This document provides a guide for setting up monitoring and testing for new ROAR apps.
<br>
[Sentry](https://docs.sentry.io) and [Cypress](https://docs.cypress.io) are used for monitoring and testing, respectively.

## Sentry Integration
Additional information can be found in the official [Sentry documentation.](https://docs.sentry.io/platforms/javascript/)

### Creating a New Project in Sentry
1. Enter the Sentry dashboard with your [account](https://roar-89588e380.sentry.io/projects/)
2. On the navigation sidebar, select "Projects" and then select "Create Project" in the top right corner
3. Select "Browser Javascript" as the SDK platform
4. For alert frequency select "I'll create my own alerts later"
5. Add the project name and the team "#roar"
6. Navigate back to the "Projects" page; find the new project and click the gear icon to access the project settings
7. Under "SDK Setup", copy the "Client Keys (DSN) which will be used later in the `sentry.js` file in the app repository


### Sentry Packages
- Install the following Sentry packages in the app repository:

``` javascript
npm install @sentry/browser@latest
npm install @sentry/integrations@latest
npm install @sentry/wasm@latest
npm install @sentry/rollup-plugin@latest
npm install @sentry/webpack-plugin@latest

```

### Generating Source Maps
The Sentry Wizard can be used to generate readable source maps for both Webpack and Rollup configurations. 
<br>
These source maps are essential for debugging and monitoring the app in production.
<br><br>
Run the following command:

```bash
npx @sentry/wizard@latest -i sourcemaps
```

The Wizard will guide you through the process of generating source maps for your project. You must complete this step for both Webpack and Rollup configurations.
<br>
Be sure to copy the SENTRY_AUTH_TOKEN, SENTRY_ORG, and SENTRY_PROJECT keys for use in the app GitHub repository.

### sentry.js
Create a new file called `sentry.js` in the `src` directory of the app. This file will define the configuration for Sentry. Copy the file below, making the following changes:
- Update the `game` and `gameShortened` variables with the appropriate values for the app
- Change the `dsn` to the Client Keys (DSN) from the Sentry project

```javascript
import * as Sentry from '@sentry/browser';
import { captureConsoleIntegration, contextLinesIntegration, extraErrorDataIntegration } from '@sentry/integrations';

const game = 'game-name';
const gameShortened = 'game-name-shortened';
const regexRoarApp = new RegExp(`^https:\\/\\/${game}--pr\\d+-\\w+\\.web\\.app\\/`);
const regexRoarStaging = new RegExp(
  `^https:\\/\\/roar-staging\\.web\\.app\\/game\\/${gameShortened}|https:\\/\\/roar-staging--pr\\d+-\\w+\\.web\\.app\\/`,
);

export function initSentry() {
  Sentry.init({
    // Change dsn to the one for the app
    dsn: 'sentry-project-client-key',
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        maskAllInputs: true,
      }),
      Sentry.browserTracingIntegration(),
      captureConsoleIntegration({
        levels: [ 'error'],
      }),
      contextLinesIntegration(),
      extraErrorDataIntegration(),
    ],
    attachStacktrace: true,
    // Performance Monitoring
    tracesSampleRate: 0.2, // Capture 20% of the transactions
    tracePropagationTargets: [
      regexRoarApp,
      regexRoarStaging,
      `https://roar.education/game/${gameShortened}`,
      'localhost',
    ],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

    beforeSend(event) {
      return event;
    },
  });
}
```

### index.js
Now that we have defined the Sentry configuration, we import it into the app's `index.js` file. Add the following import statement to the top of the file:

```javascript
import { initSentry } from './sentry';
```
Then call the `initSentry` function at the beginning of the `init` function in the app constructor:

```javascript
class RoarApp {
  constructor(firekit, gameParams, userParams, displayElement) {
    this.gameParams = gameParams;
    this.userParams = userParams;
    this.firekit = firekit;
    this.displayElement = displayElement;
    this.jsPsych = null;
  }

  async init() {
    initSentry();
    await this.firekit.startRun();
    const config = await initConfig(this.firekit, this.gameParams, this.userParams, this.displayElement);

    store.session.set('config', config);
    return buildExperiment(this.firekit, config);
  }

  async run() {
    const { jsPsych, timeline } = await this.init();
    this.jsPsych = jsPsych;
    this.jsPsych.run(timeline);

    await waitFor(() => this.firekit.run.completed === true);
  }

  async abort() {
    this.firekit.abortRun();
    document.querySelectorAll('audio').forEach((el) => el.pause());
    if (this.jsPsych) {
      this.jsPsych.endExperiment();
    }
  }
}

export default RoarApp;
```
This will initialize Sentry at the beginning of the app's execution and enable error tracking and monitoring.

### GitHub Environment Variables
Add the following environment variables to the action secrets in the GitHub repository for the app:
- `SENTRY_AUTH_TOKEN` = [token returned from the Sentry Wizard]
- `SENTRY_PROJECT` = [project name]
- `SENTRY_ORG` = roar-89588e380

### Sentry Alerts
**Disable localhost Events** <br>
We want to disable events that originate from `localhost`, as they are not relevant for production monitoring.
1. Go to the "Settings" page of the project by clicking the gear icon in the top right corner of the project card on the projects page
2. Under "Processing", select "Inbound Filters"
3. Enable "Filter out events from localhost"

**Custom Slack Alerts** <br>
We want important alerts, such as bugs, user feedback, and performance issues to be sent to the appropriate Slack channel.
We can simply duplicate the alerts that have already been set up on the other apps.
1. Click "Alerts" on the navigation sidebar
2. Select the "swr" project (although any project will work)
3. Click "Slack Integration Issue Report - Word"
4. Click "Duplicate" in the top right corner
5. Under "Select an environment and project", select the new Sentry project from the dropdown
6. Scroll to the bottom of the page and under "Add a name and owner", change the name of the alert to reflect the name of the new Sentry project
7. Click "Save Rule"
8. Repeat for the "Slack Integration Performance Report - Word" alert

## Cypress Integration
Additional information can be found in the official [Cypress documentation.](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Cypress Packages
- Install the following Cypress packages in the app repository:

``` javascript
npm install cypress@latest --save-dev
npm install eslint-plugin-cypress@latest --save-dev
npm install fkill-cli@latest --save-dev
```

### Cypress Configuration
Run the following command to create the Cypress configuration file:

```bash
npx cypress open
```
This will open a configuration wizard and create a Cypress config file `cypress.config.js` in the app repository.

### Creating a New Project in Cypress
1. Enter the Cypress dashboard with your [account](https://cloud.cypress.io/organizations/ed07b9f9-d1f7-4784-953a-eecbb7303e36/projects)
2. Go to "Projects" and select "New Project"
3. Add the project name and select "Private"
4. Copy the `projectId` into the `cypress.config.js` file in the app repository
5. Select "GitHub Actions" as the CI provider and copy the `CYPRESS_RECORD_KEY` for use in the GitHub repository secrets

Copy the `cypress.config.js` file below, substituting the appropriate `projectId:

```javascript
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'app-project-id',
  e2e: {
    experimentalRunAllSpecs: true,
    retries: 2,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL ?? 'http://localhost:8000',
      timeout: 10000,
    },
  },
});
```

### package.json
Add the following scripts to the `package.json` `scripts` key in the app repository:

```json
{ 
  "scripts": {
    "predev": "fkill :8000 -f || true",
    "preprod": "fkill :8000 -f || true",
    "cypress:open": "cypress open"
  }
}
```

### eslintrc.json
Add the following configuration to the `eslintrc.json` `extends` key in the app repository:

```json
{
  "extends": [
    "airbnb-base",
    "prettier",
    "plugin:cypress/recommended"
  ]
}
```

### First Test Spec
The Cypress configuration should have created a `cypress/` directory in the app repository. Within the `cypress/e2e/` directory, create the following test spec:
`template.spec.js`
```javascript
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
```
If the test initializes and passes when a new pull request is pushed to the app repo, Cypress is correctly configured and monitoring the app.
We can delete this test spec once the app is ready for a proper test suite.