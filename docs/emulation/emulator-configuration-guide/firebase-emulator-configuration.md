# Firebase Emulator Configuration

Now we have to configure the app's Firebase configuration to use the Firebase Emulator Suite. This will allow us to test the app locally and inspect the data that is being sent to the Firebase services.

Overwrite `serve/firebaseConfig.js` with the following code:

```javascript
import { log } from '../src/experiment/config/logger';

const devFirebaseConfig = {
  apiKey: 'AIzaSyCX9WR-j9yv1giYeFsMpbjj2G3p7jNHxIU',
  authDomain: 'gse-yeatmanlab.firebaseapp.com',
  projectId: 'gse-yeatmanlab',
  storageBucket: 'gse-yeatmanlab.appspot.com',
  messagingSenderId: '292331000426',
  appId: '1:292331000426:web:91a04220991e3405737013',
  measurementId: 'G-0TBTMDS993',
  siteKey: '6LcqiEwqAAAAAGvgJci5ZCYT4JFeXM0cjtqrvJrO',
  debugToken: process.env.APPCHECK_DEBUG_TOKEN,
};

const emulatorFirebaseConfig = {
  apiKey: 'AIzaSyCEUxEgYMp4fg2zORT0lsgn4Q6CCoMVzjU',
  authDomain: 'gse-roar-assessment-dev.firebaseapp.com',
  projectId: 'gse-roar-assessment-dev',
  storageBucket: 'gse-roar-assessment-dev.appspot.com',
  messagingSenderId: '26086061121',
  appId: '1:26086061121:web:262163d6c145b7a80bc2c0',
  siteKey: '6Ldq2SEqAAAAAKXTxXs9GnykkEZLYeVijzAKzqfQ',
  debugToken: process.env.APPCHECK_DEBUG_TOKEN,
  emulatorPorts: {
    db: 8080,
    auth: 9099,
    functions: 9000,
    hosting: 5000,
  },
};

const productionFirebaseConfig = {
  apiKey: 'AIzaSyDw0TnTXbvRyoVo5_oa_muhXk9q7783k_g',
  authDomain: 'gse-roar-assessment.firebaseapp.com',
  projectId: 'gse-roar-assessment',
  storageBucket: 'gse-roar-assessment.appspot.com',
  messagingSenderId: '757277423033',
  appId: '1:757277423033:web:d6e204ee2dd1047cb77268',
  siteKey: '6Lc54SEqAAAAAKJF8QNpEzU6wHtXGAteVvrdB8XK',
};

let firebaseConfigWrapper;

// eslint-disable-next-line no-undef
if (ROAR_DB === 'development') {
  firebaseConfigWrapper = devFirebaseConfig;
  // eslint-disable-next-line no-undef
} else if (ROAR_DB === 'emulator') {
  firebaseConfigWrapper = emulatorFirebaseConfig;
  // eslint-disable-next-line no-undef
} else if (ROAR_DB === 'production') {
  firebaseConfigWrapper = productionFirebaseConfig;
} else {
  throw new Error(
    // eslint-disable-next-line no-undef
    `Invalid ROAR_DB environment variable value. Expected "development", "emulator", or "production". Received ${ROAR_DB}.`,
  );
}

export const firebaseConfig = { ...firebaseConfigWrapper };

export const roarConfig = {
  firebaseConfig,
};

const logMessage = `This ROAR app will write data to the ${roarConfig.firebaseConfig.projectId} firestore database`;
log.info(logMessage);

```

Notice that we now have a configuration for the development, emulator, and production environments. <br>
The development environment uses the Firebase project `gse-yeatmanlab`, the emulator environment uses the Firebase project `gse-roar-assessment-dev`, and the production environment uses the Firebase project `gse-roar-assessment`. <br>
Each configuration also includes a `siteKey`, which identifies the reCAPTCHA site key for the Firebase App Check service. <br>
The development and emulator configurations also include a `debugToken` for the Firebase App Check service, which is set using the `APPCHECK_DEBUG_TOKEN` environment variable. This token is used to bypass the App Check verification during local development and testing. <br>
The emulator configuration also includes `emulatorPorts` for the Firestore, Authentication, Functions, and Hosting emulators which match the default ports used by the Firebase Emulator Suite set in the `firebase.json` file.

## Modifying .firebaserc
The `.firebaserc` file is used to define project-specific configurations for the Firebase CLI. 
It typically includes information about the Firebase projects associated with the current project and any aliases for those projects. 
This file helps the Firebase CLI understand which Firebase project to interact with when running commands.

### Setting Production and Staging Targets
We need to set production and staging targets in the `.firebaserc` file to define the Firebase projects associated with the hosting emulation.

Overwrite `.firebaserc` with the following code:

```json
{
  "projects": {
    "default": "gse-roar-assessment"
  },
  "targets": {
    "gse-roar-assessment": {
      "hosting": {
        "production": [
          "[roar][roav][roam]-[app]"
        ],
        "staging": [
          "[roar][roav][roam]-[app]-staging"
        ]
      }
    },
    "gse-roar-assessment-dev": {
      "hosting": {
        "production": [
          "gse-roar-assessment-dev"
        ],
        "staging": [
          "gse-roar-assessment-dev-staging"
        ]
      }
    }
  },
  "etags": {}
}
```
Make sure to replace `[roar][roav][roam]` with the appropriate prefix for your project, and `[app]` with the appropriate `taskId` for your project.

## Modifying firebase.json
The `firebase.json` file is used to define the configuration for the Firebase CLI commands.

Overwrite `firebase.json` with the following code:

```json
{
  "hosting": [
    {
      "public": "dist",
      "target": "production",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ],
      "headers": [
        {
          "source": "**/*",
          "headers": [
            {
              "key": "Feature-Policy",
              "value": "autoplay=*"
            }
          ]
        }
      ]
    },
    {
      "public": "dist",
      "target": "staging",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ],
      "headers": [
        {
          "source": "**/*",
          "headers": [
            {
              "key": "Feature-Policy",
              "value": "autoplay=*"
            }
          ]
        }
      ]
    }
  ],
  "firestore": {
    "rules": "firebase/firestore.rules"
  },
  "emulators": {
    "auth": {
      "port": 9099
    },
    "firestore": {
      "port": 8080
    },
    "hosting": {
      "port": 5000
    },
    "ui": {
      "enabled": true
    },
    "singleProjectMode": true
  }
}
```

This new configuration includes settings for hosting, Firestore, and the Firebase Emulator Suite, as well as applying Firestore rules to the Firestore emulator. <br>