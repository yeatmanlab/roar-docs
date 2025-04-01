# publish-to-npm-create-new-release.yml
This GitHub Actions workflow is used to publish a new release to npm and create a new release on GitHub. The workflow is triggered when a new tag is pushed to the repository. The workflow will build the project, publish the package to npm, create a new release on GitHub, and upload source maps to Sentry. If the workflow fails, a new issue will be created in the repository.


```yaml
name: Publish, Release, and Deploy
on:
  push:
    tags:
      - 'v[0-9]+.[0-9]+.[0-9]+'
      - 'v[0-9]+.[0-9]+.[0-9]+-alpha.[0-9]+'
      - 'v[0-9]+.[0-9]+.[0-9]+-beta.[0-9]+'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3
        with:
          ref: main

      - name: Setup Node.js environment
        uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'
          registry-url: 'https://registry.npmjs.org'
          node-version-file: '.nvmrc'
          cache: 'npm'

      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run package

      - name: Check for uncommitted changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git commit -am "Commit uncommitted changes [skip ci]"

      - name: Push tag
        run: |
          git push origin main --follow-tags

      - name: Publish 🚀
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Create GitHub Release
        id: create_release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false

      - name: Create Sentry release and upload source maps
        uses: getsentry/action-release@v1.7.0
        env:
          SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
          SENTRY_ORG: ${{ secrets.SENTRY_ORG }}
          SENTRY_PROJECT: ${{ secrets.SENTRY_PROJECT }}
        with:
          environment: production
          sourcemap: ./lib/*.js.map
          version: ${{ github.ref }}

      - name: Notify on failure
        if: failure()
        uses: actions/github-script@v5
        with:
          script: |
            const issue = {
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: "Combined workflow failed",
              body: `The workflow failed on [${context.sha.substring(0, 7)}](${context.payload.repository.html_url}/commit/${context.sha}). Please check it.`,
            };
            github.rest.issues.create(issue);

  deploy_to_production:
    needs: build
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
          target: production

      - name: Notify on failure
        if: failure()
        uses: actions/github-script@v5
        with:
          script: |
            const issue = {
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: "Combined workflow failed",
              body: `The workflow failed on [${context.sha.substring(0, 7)}](${context.payload.repository.html_url}/commit/${context.sha}). Please check it.`,
            };
            github.rest.issues.create(issue);
```