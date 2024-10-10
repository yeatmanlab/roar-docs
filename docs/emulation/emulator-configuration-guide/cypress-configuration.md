# Cypress Configuration
We can set up Cypress so that it can run tests against the Firebase Emulator Suite. This allows us to test the Firebase services that are used in the project locally and inspect the data that is being sent to the Firebase services.

## Directory Structure
The following directory structure is used to configure Cypress to run tests against the Firebase Emulator Suite:

```
cypress/
├── e2e/
│   ├── default-tests/
│   │   ├── test1.cy.js
│   │   ├── test2.cy.js
│   │   ├── variant-tests/
│   │   │   ├── test1.cy.js
│   │   │   └── test2.cy.js
│   ├── generateVariantTests.cy.js
├── fixtures/
│   ├── generatedTestTemplate.js
│   ├── data1.json
│   └── data2.json
├── support/
│   ├── commands.js
│   ├── constants.js
│   ├── devFirebase.js
│   ├── devFirebaseConfig.js
│   ├── e2e.js
│   ├── query.js
│   └── utils.js
```

## cypress.config.js
The `cypress.config.js` file is used to configure the Cypress test runner. This file is located in the root of the project directory. The following configuration options are used to setup Cypress to run tests against the Firebase Emulator Suite:

Create or overwrite the `cypress.config.js` file with the following content:

```javascript
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import cypressFsPlugin from 'cypress-fs/plugins/index';

dotenv.config({ path: '.env.test' });

export default defineConfig({
  projectId: 'app-project-id',
  e2e: {
    experimentalRunAllSpecs: true,
    retries: 2,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      return cypressFsPlugin(on, config);
    },
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL ?? 'http://localhost:8000',
      timeout: 10000,
      superAdminUsername: process.env.SUPER_ADMIN_USERNAME,
      superAdminPassword: process.env.SUPER_ADMIN_PASSWORD,
      superAdminEmail: process.env.SUPER_ADMIN_EMAIL,
      superAdminId: process.env.SUPER_ADMIN_ID,
      appCheckDebugToken: process.env.APPCHECK_DEBUG_TOKEN,
    },
  },
});
```

This configuration allows us to mainain a separate `.env.test` file for the Cypress environment variables. <br>
The `projectId` is set to the project ID of the Cypress Cloud project which stores the test results. Substitute with the actualy projectId found in the [Cypress Cloud](https://cloud.cypress.io/organizations/ed07b9f9-d1f7-4784-953a-eecbb7303e36/projects) for the project.<br>
The `experimentalRunAllSpecs` is set to `true` to run all the tests. The `retries` is set to 2 to retry the tests if they fail. The `setupNodeEvents` is used to setup the `cypress-fs` plugin to allow Cypress to read and write files.<br>
The `baseUrl` is set to the local server that is running the Firebase Emulator Suite. The `timeout` is set to 10 seconds. The `superAdminUsername`, `superAdminPassword`, `superAdminEmail`, `superAdminId`, and `appCheckDebugToken` are set to the environment variables that are used in the Cypress tests. <br>
The `timeout` is set to 10 seconds to allow the tests to run for a longer period of time. <br>
The `superAdminUsername`, `superAdminPassword`, `superAdminEmail`, `superAdminId`, and `appCheckDebugToken` are set to the environment variables that are used in the Cypress tests and are also stored as GitHub secrets.

## Supporting Files
The following files are used to support the Cypress configuration, in addition to the Cypress provisioned `e2e.js`, and `commands.js`.

### constants.js
The `constants.js` file is used to define constants that are used in the Cypress tests. This file is located in the `cypress/support/` directory.

```javascript
export const TIMEOUT = Cypress.env('timeout');
export const TASK = 'task-name';
export const TEST_DIR_NAME = 'cypress/e2e/default-tests/variant-tests/';
export const COMMAND = 'play-game-command';
````
The contents of this file will vary depending on the app, but should at least contain the `TIMEOUT`, `TASK`, `TEST_DIR_NAME`, and `COMMAND` constants.
Replace `task-name` with the name of the task that the variants are registered under. Replace `play-game-command` with the command that is used to play the game.

The `COMMAND` constant should be a Cypress command which initializes the game. The command should take an object as an argument, and this object should contain keys for variant parameters and language, with other keys as needed. <br>
The command should be defined in the `commands.js` file.

#### Example COMMAND constant for ROAR Sentence:
```javascript
Cypress.Commands.add(
  'playSREGame',
  ({
    startText = START_TEXT_DEFAULT,
    endText = END_TEXT_DEFAULT,
    language = 'en',
    variantParams = null,
  } = {}) => {
    if (variantParams) {
      cy.visit(`${Cypress.env('baseUrl')}/?${variantParams}`, { timeout: 2 * TIMEOUT });
    } else {
      cy.visit(`${Cypress.env('baseUrl')}`, { timeout: 2 * TIMEOUT });
    }

    cy.playIntro({
      startText: startText,
      variantParams: variantParams,
    });

    cy.playSRELoop(endText);
  },
);
````

### generateVariantTests.cy.js
The `generateVariantTests.cy.js` file is used to generate the test cases for the variants. This file is located in the `cypress/` directory at the top level. 
The following content is used to generate the test cases for the variants:

```javascript
import { getRegisteredVariants } from '../support/query';
import { useDevFirebase, signInAsSuperAdmin, mapVariantParameters } from '../support/utils';
import { generatedTestTemplate } from '../fixtures/generatedTestTemplate';
import { TIMEOUT, TASK, TEST_DIR_NAME, COMMAND } from '../support/constants';

const { auth, db } = useDevFirebase('assessmentDev');

describe('Generating variant tests.', () => {
  before(() => {
    signInAsSuperAdmin(auth);
  });
  it('Creates a test spec for each variant.', () => {
    cy.wrap(getRegisteredVariants(db, TASK), { timeout: TIMEOUT }).then((docs) => {
      docs.forEach((variant) => {
        cy.log(`Found registered variant: ${variant.name} with params: ${JSON.stringify(variant.params)}`);

        const variantParams = mapVariantParameters(variant.params);

        // Create a test spec for each registered variant
        cy.writeFile(
          `${TEST_DIR_NAME}/${variant.name}.cy.js`,
          generatedTestTemplate({
            command: COMMAND,
            name: variant.name,
            params: variantParams,
          }),
        ).then(() => {
          cy.log('Successfully created test spec:', variant.name);
        });
      });
    });
  });
});
```

### generatedTestTemplate.js
The `generatedTestTemplate.js` file is used to generate the test template for the variants. This file is located in the `cypress/fixtures/` directory.

The following content is used to generate the test template for the variants:

```javascript
export const generatedTestTemplate = ({ command = null, name = null, params = null } = {}) => `
describe('Test play through of variant: ${name}', () => {
  it('Plays the generated test spec.', () => {
    ${command}({
        variantParams: '${params}'
    });
  });
});
`;
```

### devFirebase.js
The `devFirebase.js` file is used to setup the Firebase configuration for the Cypress tests. This file is located in the `cypress/support/` directory.

```javascript
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import devFirebaseConfig from './devFirebaseConfig';

/**
 * Initializes a Firebase app and retrieves the Auth and Firestore services.
 * If the app with the specified name already exists, it reuses the existing app.
 * Optionally connects to the Firestore emulator if `useEmulator` is true.
 *
 * @param {Object} config - The Firebase configuration object.
 * @param {string} name - The name of the Firebase app instance.
 * @param {boolean} useEmulator - A flag indicating whether to connect to the Firestore emulator.
 * @returns {Object} - An object containing the Firebase app, Auth, and Firestore services.
 */
const initializeAndGetFirebase = (config, name, useEmulator) => {
  const existingApp = getApps().find((app) => app.name === name);

  if (existingApp) {
    console.log('Found existing app:', existingApp);
  }
  const app = existingApp || initializeApp(config, name);
  const auth = getAuth(app);
  const db = getFirestore(app);

  if (useEmulator) {
    console.log('Connecting to Firestore emulator...');
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to Firestore emulator.');
  }

  return {
    app,
    auth,
    db,
  };
};

/**
 * Retrieves the Firebase app, Auth, and Firestore services based on the given config key.
 * It supports multiple environments (e.g., adminDev, assessmentDev) and connects to the Firestore emulator
 * if `useEmulator` is true. Returns null if the specified config is not found.
 *
 * @param {string} config - The key for selecting the Firebase configuration (e.g., 'adminDev', 'assessmentDev').
 * @param {boolean} [useEmulator=true] - A flag indicating whether to connect to the Firestore emulator.
 * @returns {Object|null} - An object containing the Firebase app, Auth, and Firestore services, or null if no config is found.
 */
export const getDevFirebase = (config, useEmulator = true) => {
  const configMap = {
    adminDev: devFirebaseConfig.adminDev,
    assessmentDev: devFirebaseConfig.assessmentDev,
  };

  const firebaseConfig = configMap[config];
  return firebaseConfig ? initializeAndGetFirebase(firebaseConfig, config, useEmulator) : null;
};
```

### devFirebaseConfig.js
The `devFirebaseConfig.js` file is used to store the Firebase configuration for the Cypress tests. This file is located in the `cypress/support/` directory.

```javascript
const devFirebaseConfig = {
  adminDev: {
    apiKey: 'AIzaSyCl-JsYraUfofQZXpzshQ6s-E0nYzlCvvg',
    authDomain: 'gse-roar-admin-dev.firebaseapp.com',
    projectId: 'gse-roar-admin-dev',
    storageBucket: 'gse-roar-admin-dev.appspot.com',
    messagingSenderId: '401455396681',
    appId: '1:401455396681:web:859ea073a116d0aececc98',
    siteKey: '6LeTgCEqAAAAAPVXEVtWoinVf_CLYF30PaETyyiT',
    debugToken: Cypress.env('appCheckDebugToken'),
  },
  assessmentDev: {
    apiKey: 'AIzaSyCEUxEgYMp4fg2zORT0lsgn4Q6CCoMVzjU',
    authDomain: 'gse-roar-assessment-dev.firebaseapp.com',
    projectId: 'gse-roar-assessment-dev',
    storageBucket: 'gse-roar-assessment-dev.appspot.com',
    messagingSenderId: '26086061121',
    appId: '1:26086061121:web:262163d6c145b7a80bc2c0',
    siteKey: '6Ldq2SEqAAAAAKXTxXs9GnykkEZLYeVijzAKzqfQ',
    debugToken: Cypress.env('appCheckDebugToken'),
    emulatorPorts: {
      db: 8080,
      auth: 9099,
      functions: 9000,
      hosting: 5000,
    },
  },
};

export default devFirebaseConfig;
```

### query.js
The `query.js` file is used to query the Firestore database. This file is located in the `cypress/support/` directory.

```javascript

import { collection, getDocs, query, where } from 'firebase/firestore';

export async function getRegisteredVariants(firestore, task) {
  try {
    const variantsRef = collection(firestore, 'tasks', task, 'variants');
    const q = query(variantsRef, where('registered', '==', true));
    const variantsSnapshot = await getDocs(q);

    if (variantsSnapshot.empty) {
      console.log('No registered variants found.');
      return [];
    }
    const docs = [];
    console.log(`Found ${variantsSnapshot.size} registered variants.`);
    variantsSnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
  } catch (error) {
    console.log('Error getting documents:', error);
    return [];
  }
}
```

### utils.js
The `utils.js` file is used to define utility functions for the Cypress tests. This file is located in the `cypress/support/` directory.

```javascript   

import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDevFirebase } from './devFirebase';

/**
 * Retrieves the Firebase app, Auth, and Firestore services for the specified environment.
 * This function abstracts the process of accessing Firebase services based on the provided environment name.
 *
 * @param {string} name - The environment name (e.g., 'adminDev', 'assessmentDev') used to get the corresponding Firebase configuration.
 * @returns {Object} - An object containing the Firebase app, Auth, and Firestore services for the specified environment.
 */
export const useFirebaseEmulator = (name) => {
  const firebase = getDevFirebase(name);
  return {
    app: firebase?.app,
    auth: firebase?.auth,
    db: firebase?.db,
  };
};

/**
 * Signs in as a Super Admin using Firebase Authentication within a Cypress test.
 * The credentials (email and password) are pulled from Cypress environment variables.
 *
 * @param {Object} auth - The Firebase Auth instance used to sign in.
 * @returns {Promise<Object>} - A promise that resolves to the authenticated user object after a successful sign-in.
 */
export function signInAsSuperAdmin(auth) {
  cy.then(() =>
    signInWithEmailAndPassword(auth, Cypress.env('superAdminEmail'), Cypress.env('superAdminPassword')),
  ).then((userCredential) => userCredential.user);
}

/**
 * Converts an object of variant parameters into a URL query string format.
 *
 * @param {Object} params - The object containing variant parameters to be converted.
 * @returns {string} - A string representing the variant parameters in URL query string format.
 */
export function mapVariantParameters(params) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}
```