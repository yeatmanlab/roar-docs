# Firebase CLI Configuration

## Initializing the Emulators

```bash
firebase init emulators
```

1. Select **Authentication**, **Firestore**, and **Hosting**, then press Enter to proceed.
2. Select the default ports for each service:
   - **auth**: 9099
   - **firestore**: 8080
   - **hosting**: 5000
3. Select `y` to enable the Firestore UI.
4. Run the Firestore UI:
    - **Firestore UI**: 4000
5. Download the emulators.

You should now be able to run the Firebase emulators with:

```bash
firebase emulators:start
```

You can inspect the emulator UI at `http://localhost:4000`, though it will be empty until the app's Firebase config has been configured to connect to the emulator.