# Auth

Authentication and authorization for access to the ROAR Dashboard is handled by Firebase and Google Cloud Identity Platform.

## Integration
The ROAR projects implement the [`roar-firekit`](https://github.com/yeatmanlab/roar-firekit/) package to handle authentication and authorization, as well as a
number of other operations. This SDK effectively serves as abstraction layer and wrapper around the Firebase SDK,
providing a simple interface for interacting with the Firebase services. 

The `roar-firekit` SDK is published on npm and can be installed via the following command:
```bash
npm i @bdelab/roar-firekit
```

## Authentication
As we rely on [two distinct databases](/roar-docs/databases/), the `roar-firekit` package allows us to authenticate with both the
admin and the assessment databases by providing the corresponding `RoarConfig` object during SDK initialization
([example](https://github.com/yeatmanlab/roar-dashboard/blob/main/src/config/firebaseRoar.js)). 


## Session Management
As this application is designed to be used by children on shared devices, it was assumed that users might not always log
out of the application when completing assessments. To address this, the ROAR Dashboard leverages `sessionStorage` to
persist auth state. 

## Session Timeout
The ROAR Dashboard implements a session timeout feature to automatically log out users after a period of inactivity. By
default, the idle threshold is set to 15 minutes, after which the user gets an additional 60 seconds to interact with
the timeout dialog before being logged out.

Due to the nature of the project and auth service, the session timeout feature was implemented on the frontend and can
be configured by modifiying the following two environment variables:
- `VITE_AUTH_SESSION_TIMEOUT_IDLE_THRESHOLD`<br>
  The time in milliseconds after which the user is considered idle.<br>

- `VITE_AUTH_SESSION_TIMEOUT_COUNTDOWN_DURATION`<br>
  The time in milliseconds the user has to interact with the timeout dialog before being logged out. <br>