# Firebase Emulation

Firebase Emulation is a feature of the Firebase CLI that allows you to run a local server that emulates the Firebase services you are using in your project. This is useful for testing your app locally without having to deploy it to Firebase.
ROAR utilizes Firebase Emulation to test the Firebase services that are used in the project. This allows the developer to test the app locally and inspect the data that is being sent to the Firebase services.

## Getting Started
The documentation for Firebase Emulation can be found [here](https://firebase.google.com/docs/emulator-suite). The Firebase Emulator Suite is a set of local tools that allow you to test your app against the Firebase services locally. The Firebase Emulator Suite includes the following emulators:
- Firestore
- Realtime Database
- Firebase Authentication
- Firebase Hosting
- Firebase Functions
- Firebase Pub/Sub
- Firebase Storage
- Firebase Extensions

## Running the Emulator
This section assumes that the Firebase CLI and other supporting tools have already been installed and configured. If this has not been done for the ROAR app, see the [Configuration](#configuration) section below.

**Start a clean instance of the emulator:**
```bash
npm run emulate:start
```
This will initialize an empty Firestore instance.
The emulator interface can be access at `http://localhost:4000`, where you can browse data, requests, authentication, and more.

**Start the emulator and import previous data:**
```bash
npm run emulate:import
```
This command tells the Firebase emulator to start and import data from the source directory listed in the command script.

**Start the app instance:**
```bash
npm run emulate:serve
```
This serves the app on `localhost:8000`, where it will read and write data to the emulator instance.

**Start a Cypress instance:**
```bash
npm run cypress:open
```
This will initialize the Cypress interface where you can choose to browse and/or execute end-to-end tests locally.

**Close the emulator and do not persist any new data:**
```bash
npm run emulate:stop
```
This kills all ports that the emulator is currently running on and will not export and new data to the source directory.

**Safely close the emulator and persist any new data:**
```bash
ctrl + c
```
This exports all new data to the source directory, where it will be imported on initialization with the import command the next time the script is run.

## Configuration
To configure the Firebase Emulator for the ROAR app, follow the steps in each section below.

1. [Dependencies](dependencies.md)
2. Firebase CLI Configuration
3. Firebase Emulator Configuration
4. Firebase App Check Configuration
5. Importing and Exporting Data
6. Cypress Configuration
7. GitHub Workflows and Secrets
8. Local Environment Variables
9. Example Commands
