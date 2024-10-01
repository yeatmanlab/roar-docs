# Setup and Dependencies
First, install the necessary dependencies and modify the necessary files to run the Firebase emulators.

## Dependencies
Install the following packages to run the Firebase emulators:

```bash
npm install buffer cypress-fs dotenv-webpack events firebase-tools http-server kill-port path-browserify stream-browserify util wait-on --save-dev
```

## package.json Configuration
Add the following to the `scripts` object in the `package.json` file:

```json
{
  "emulate:start": "npx firebase emulators:start",
  "emulate:import": "npx firebase emulators:start --project=gse-roar-assessment-dev --import=./emulator-exports --export-on-exit=./emulator-exports",
  "emulate:stop": "npx kill-port 4000 5000 8080 9099 9000",
  "emulate:serve": "npx webpack serve --open --mode development --env dbmode=emulator",
  "emulate:serve-ci": "npx http-server dist -p 8000",
  "emulate:build": "npx webpack --mode production --env dbmode=emulator",
  "preemulate:import": "mkdir -p firebase && curl -o firebase/firestore.rules https://raw.githubusercontent.com/yeatmanlab/roar-dashboard/main/firebase/assessment/firestore.rules",
  "preemulate:start": "mkdir -p firebase && curl -o firebase/firestore.rules https://raw.githubusercontent.com/yeatmanlab/roar-dashboard/main/firebase/assessment/firestore.rules",
  "preemulate:serve": "npx kill-port 8000"
}
```

## Webpack Configuration
Remove the following from the `webpack.config.js` file:

```javascript
const dotenv = require('dotenv');
dotenv.config();
````

Add the following to the top level of the `webpack.config.js` file:

```javascript
const Dotenv = require('dotenv-webpack');
```

Add the following to the `envDependentConfig.plugins` array in the `webpack.config.js` file:

```javascript
new Dotenv({path: './.env'})
```

Add the following key-value pairs to the `resolve.fallback` object in `webpack.config.js`:

```
resolve: 
  fallback: {
    path: require.resolve('path-browserify'),
    util: require.resolve('util/'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    events: require.resolve('events/')
  }
}
```

Add or change the constant `roarDB` in `module.exports` to the following:

```javascript
  const roarDB = env.dbmode ?? 'development';
````

### .gitignore
Add the following to the `.gitignore` file:

```
# Environment Variables
.env
.env.test

# Emulator Suite
firebase-debug.log
firebase-debug.*.log
firestore-debug.log
firestore-debug.*.log
ui-debug.log
ui-debug.*.log
firebase/
.firebase/
emulator-exports/
```