# Commands
This section assumes that the Firebase CLI and other supporting tools have already been installed and configured. If this has not been done for the ROAR app, see the [Configuration](#configuration) section below.
The following commands are used to run the Firebase Emulator for the ROAR app. These commands are used to start, stop, and interact with the emulator and the app.

### Start a Clean Instance of the Emulator
```bash
npm run emulate:start
```
This will initialize an empty Firestore instance.
The emulator interface can be access at `http://localhost:4000`, where you can browse data, requests, authentication, and more.

### Start the Emulator and Import Data
```bash
npm run emulate:import
```
This command tells the Firebase emulator to start and import data from the source directory listed in the command script.

### Serve the App with the Emulator
```bash
npm run emulate:serve
```
This serves the app on `localhost:8000`, where it will read and write data to the emulator instance.

### Run a Cypress Instance
```bash
npm run cypress:open
```
This will initialize the Cypress interface where you can choose to browse and/or execute end-to-end tests locally.

### Stop the Emulator 
```bash
npm run emulate:stop
```
This kills all ports that the emulator is currently running on and will not export and new data to the source directory.

### Stop the Emulator and Export Data
```bash
ctrl + c
```
This exports all new data to the source directory, where it will be imported on initialization with the import command the next time the script is run.

**Note**: You may need to install the `firebase-tools` package globally to use the `firebase` command.