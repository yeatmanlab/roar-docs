# GitHub Secrets and Workflows
Running the Firebase Emulator requires the use of GitHub Workflows and Secrets. This section will explain how to set up the GitHub Workflows and Secrets for the ROAR app.

## Secrets
The following secrets are required to run the Firebase Emulator in the GitHub Workflow:

### Firebase Secrets
- APPCHECK_DEBUG_TOKEN
- FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT
- FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT_DEV

### Testing Secrets
- CYPRESS_BASE_URL
- CYPRESS_RECORD_KEY
- SUPER_ADMIN_USERNAME
- SUPER_ADMIN_PASSWORD
- SUPER_ADMIN_EMAIL
- SUPER_ADMIN_ID

### Sentry Secrets
- SENTRY_AUTH_TOKEN
- SENTRY_ORG
- SENTRY_PROJECT

### Other Secrets
- DASHBOARD_REPO_TOKEN
- NPM_TOKEN

## Workflows
The following GitHub Workflows are used to run the Firebase Emulator:

### firebase-emulation-tests.yml
This workflow runs the Firebase Emulator and executes the tests using the Cypress testing framework. The workflow is triggered on push and pull request events.

```yaml
name: Firebase Emulation Tests
on:
  pull_request:
    types: [opened, reopened, synchronize]

concurrency:
  group: $ {{ env.CYPRESS_PARALLEL_GROUP }}
  cancel-in-progress: true

jobs:
  firebase_emulate_and_cypress_run:
    runs-on: ubuntu-latest
    timeout-minutes: 120
    strategy:
      fail-fast: false
      matrix:
        browser: [chromium, edge]
        containers: [1, 2]

    env:
      CYPRESS_BASE_URL: 'http://localhost:8000'
      CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
      CYPRESS_PARALLEL_GROUP: ci-preview-tests-${{ github.run_id }}-${{ github.ref }}
      COMMIT_INFO_MESSAGE: E2E Tests for PR ${{ github.event.number }} "${{ github.event.pull_request.title }}" from commit "${{ github.event.pull_request.head.sha }}"
      COMMIT_INFO_SHA: ${{ github.event.pull_request.head.sha }}
      SUPER_ADMIN_USERNAME: ${{ secrets.SUPER_ADMIN_USERNAME }}
      SUPER_ADMIN_PASSWORD: ${{ secrets.SUPER_ADMIN_PASSWORD }}
      SUPER_ADMIN_EMAIL: ${{ secrets.SUPER_ADMIN_EMAIL }}
      SUPER_ADMIN_ID: ${{ secrets.SUPER_ADMIN_ID }}
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      APPCHECK_DEBUG_TOKEN: ${{ secrets.APPCHECK_DEBUG_TOKEN }}
      EXPORT_BUCKET: gs://roar-assessment-dev-export
      EXPORT_DIR: emulator-exports-ci-${{ matrix.browser }}-${{ matrix.containers }}-${{ github.run_id }}-${{ github.job }}

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Clean npm cache
        run: npm cache clean --force

      - name: Install Dependencies
        run: npm ci

      - name: Authenticate with Google Cloud SDK
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT_DEV }}

      - name: Set up Google Cloud SDK with Firebase Service Account
        uses: google-github-actions/setup-gcloud@v2
        with:
          project_id: gse-roar-assessment-dev

      - name: Export Firestore Data
        run: |
          gcloud firestore export $EXPORT_BUCKET/$EXPORT_DIR --collection-ids=tasks,variants

      - name: Download Firestore Data
        run: |
          gsutil -m cp -r $EXPORT_BUCKET/$EXPORT_DIR .

      - name: Start Firestore Emulator and Import Data
        run: |
          npx firebase emulators:start --project=gse-roar-assessment-dev --import=./$EXPORT_DIR &
          npx wait-on tcp:4000 --timeout 60000

      - name: Build the App
        run: npm run emulate:build

      - name: Serve the App
        run: |
          npm run emulate:serve-ci & 
          npx wait-on http://127.0.0.1:8000 --timeout 60000;
          echo "Server started and is accessible at http://127.0.0.1:8000"

      - name: Generate Variant Tests
        uses: cypress-io/github-action@v6
        with:
          browser: ${{ matrix.browser }}
          headed: false,
          record: true
          parallel: false
          wait-on: ${{ env.CYPRESS_BASE_URL }}
          spec: 'cypress/e2e/generateVariantTests.cy.js'

      - name: Cypress Default Tests
        uses: cypress-io/github-action@v6
        with:
          browser: ${{ matrix.browser }}
          headed: true
          record: true
          parallel: true
          wait-on: ${{ env.CYPRESS_BASE_URL }}
          spec: 'cypress/e2e/default-tests/**/*'
          wait-on-timeout: 300

      - name: Clean up Firestore Exports
        if: always()
        run: |
          gsutil -m -q rm -rf $EXPORT_BUCKET/$EXPORT_DIR || true
```