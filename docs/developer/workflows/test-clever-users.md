# How to Impersonate a Clever User on Localhost

This guide walks you through the steps needed to impersonate a Clever user on your localhost for testing purposes.

## Steps to Impersonate a Clever User

1. **Start the Application in Development Mode**
   - Run the following command on your terminal:
     ```bash
     npm run dev:live
     ```
   This will start the development server and prepare the app for Clever testing.

   > **Note:** You need to use `dev:live` because impersonating users through Clever requires interacting with live production data.

2. **Access Clever Data Browser**
   - Open your browser and navigate to [Clever](https://apps.clever.com).
   - Log in to your Clever account.

3. **Find and Select the User to Impersonate**
   - In the Data Browser, search for the **district**, **school**, **sections (class)** and then select a **teacher**, **admin**, or **student** you want to impersonate.
   - Click on the name of the user.
   - Click on the blue button `Login as {User's Name}`.

4. **Ensure Data Loading Completes**
   - Once you click `Login as {User's Name}`, it will open the `roar.education` page wait until all data is fully loaded.
   - You should be able to see the dashboard corresponding to the user you are impersonating.

    > **Note** When you select "Login as {User's Name}" in Clever, a session for that user gets initialized, including authentication tokens and necessary user information. If the data hasn't fully loaded, this session might not be completely established, which can lead to login issues or incomplete data when you try to access your local application.

5. **Log In on Localhost**
   - After the data is fully loaded on `roar.education`, open go to your running localhost page (`https://localhost:5173`).
   - Click on the **Clever Sign-In Button**.
   - You should now be logged in as the impersonated user in localhost.