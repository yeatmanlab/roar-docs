# Packaging and Publishing to npm

Once you have created a new Roar app, have set up the necessary GitHUb automations, Sentry, and Cypress integrations you are ready to publish it to npm.

## Generating an npm token
Each app needs a npm token which allows automatic publishing to npm. To generate a new token, follow these steps:
1. Navigate to your user profile on [npmjs.com](https://www.npmjs.com/)
2. Click your avatar in the top right corner and select "Access Tokens"
3. Click "Generate New Token"
4. Select "Classic Token"
5. Name the token appropriately, e.g. `ROAR-SWR GitHub Actions Token` and selected `automation` for the scope
6. Click "Generate Token"
7. Copy the token and store it in a secure location
8. Add the token to the GitHub repository secrets as `NPM_TOKEN`

## Publishing to npm
### Publishing to npm for the first time
1. In a terminal window, navigate to the root directory of the app
2. Run the following command to publish the app to npm:
    ```bash
    npm publish --access public
    ```
3. Verify that the app is published by navigating to the app's npm page, e.g. [https://www.npmjs.com/package/@bdelab/roar-swr](https://www.npmjs.com/package/@bdelab/roar-swr)

This command will publish the app to npm and make it available for installation in other projects.

## Automated npm publishing
If you have set up GitHub actions for the app using the scripts outlined in the previous pages, the app will be automatically published to npm when a new release is created. The GitHub action workflow file will contain the necessary steps to publish the app to npm.
You can also trigger a manual publish in the following way:
1. In a terminal window, navigate to the root directory of the app
2. Run the following command to publish the app to npm:
    ```bash
    npm version [major|minor|patch]
    ```
Where `[major|minor|patch]` is the type of version bump you want to make. This command will bump the version number in the `package.json` file and create a new release in the GitHub repository. The GitHub action workflow will then automatically publish the app to npm.
This action triggers a new release on GitHub, on Sentry, and it will also push any changes from the staging branch into production.