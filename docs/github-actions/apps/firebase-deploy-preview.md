# firebase-deploy-preview.yml
This GitHub action deploys the app to Firebase Hosting for previewing the app in a staging environment. The action is triggered when a pull request is opened, reopened, or synchronized. The action uses the `FirebaseExtended/action-hosting-deploy` action to deploy the app to Firebase Hosting.

```yaml
name: Firebase Deploy to Staging
on:
  pull_request:
    types: [opened, reopened, synchronize]

concurrency:
  group: ci-preview-tests-${{ github.ref }}-1
  cancel-in-progress: true

jobs:
  build_and_preview:
    if: '${{ github.event.pull_request.head.repo.full_name == github.repository }}'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'
      - run: npm ci && npm run build:dev
      - name: Deploy to Firebase Hosting Channel
        id: firebase-deploy
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}'
          projectId: gse-roar-assessment
          target: staging
      - run: echo ${{ fromJson(steps.firebase-deploy.outputs.urls)[0] }}
    outputs:
      deployUrl: ${{ fromJson(steps.firebase-deploy.outputs.urls)[0] }}
```