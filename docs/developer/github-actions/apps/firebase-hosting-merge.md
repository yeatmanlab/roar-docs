# firebase-hosting-merge.yml
This GitHub action deploys the app to Firebase Hosting for previewing the app in a staging environment. The action is triggered when a pull request is merged into the `main` branch. The action uses the `FirebaseExtended/action-hosting-deploy` action to deploy the app to Firebase Hosting.

```yaml
name: Deploy to Staging Firebase Hosting on Merge
'on':
  push:
    branches:
      - main
    tags-ignore:
      - 'v[0-9]+.[0-9]+.[0-9]+'
      - 'v[0-9]+.[0-9]+.[0-9]+-alpha.[0-9]+'
      - 'v[0-9]+.[0-9]+.[0-9]+-beta.[0-9]+'
jobs:
  build_and_deploy:
    if: "!contains(github.event.head_commit.message, '[skip ci]')"
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: 'npm ci && npm run build:prod'
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}'
          channelId: live
          projectId: gse-roar-assessment
          target: staging
```