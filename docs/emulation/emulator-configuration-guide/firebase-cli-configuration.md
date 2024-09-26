# Firebase CLI Configuration

## Initializing the Emulators
```bash
firebase init emulators
```

Select **Authentication**, **Firestore**, and **Hosting**, then press Enter to proceed.

Select the default ports for each service
auth: 9099
firestore: 8080
hosting: 5000

Select y to enable the Firestore UI 
Run the Firestore UI on port 4000

Download the emulators

You should now be able to run the Fireabase emulators with

```bash
firebase emulators:start
```

You can inspect the emulator UI at `http://localhost:4000`, though it will be empty
until the app's firebase config has been configured to connect to the emulator.