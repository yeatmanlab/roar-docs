# Preparing the App for Packaging and Deployment

## Researcher
- Ensure the app code is structured appropriately.

## Developer
Working within the app repository:

- If the web app bundles external html, scripts, or strings:
  - `npm install @rollup/plugin-html, rollup-plugin-string`
- Verify `package.json` is configured correctly, especially the "name" field.
  - ex.` "name": "@bdelab/package-name"`
- Check both Webpack and Rollup configurations, changing any relevant fields including page title and app name where applicable. 

- ### Sample `webpack.config.cjs` from roar-swr:

``` javascript
    const path = require('path');
    const webpack = require('webpack');
    // eslint-disable-next-line import/no-extraneous-dependencies
    const { merge } = require('webpack-merge');
    // eslint-disable-next-line import/no-extraneous-dependencies
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
    const dotenv = require('dotenv');
    dotenv.config();
    
    const commonConfig = {
      optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`;
              },
              chunks: 'all',
            },
          },
        },
      },
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
        },
      },
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'img/[name][ext]',
            },
          },
          {
            test: /\.mp3$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  outputPath: 'audio',
                },
              },
            ],
          },
          {
            test: /\.mp4$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'video',
                },
              },
            ],
          },
          {
            test: /\.csv$/,
            use: [
              {
                loader: 'csv-loader',
                options: {
                  header: true,
                  dynamicTyping: true,
                  skipEmptyLines: true,
                },
              },
            ],
          },
        ],
      },
      experiments: {
        topLevelAwait: true,
      },
    };
    
    const webConfig = merge(commonConfig, {
      entry: {
        index: path.resolve(__dirname, 'serve', 'serve.js'),
      },
      output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
          keep: /\.git/,
        },
      },
      devtool: 'source-map',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Rapid Online Assessment of Reading - SWR',
        }),
        sentryWebpackPlugin({
          org: 'roar-89588e380',
          project: 'swr',
          authToken: process.env.SENTRY_AUTH_TOKEN,
          debug: true,
          errorHandler: (err) => {
            console.warn(err);
          },
        }),
      ],
    });
    
    const productionConfig = merge(webConfig, {
      mode: 'production',
    });
    
    const developmentConfig = merge(webConfig, {
      mode: 'development',
      devServer: {
        port: 8000,
        static: './dist',
        client: {
          overlay: false,
        },
      },
    });
    
    module.exports = async (env, args) => {
      const roarDB = env.dbmode === 'production' ? 'production' : 'development';
    
      const envDependentConfig = {
        plugins: [
          new webpack.ids.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
          new webpack.DefinePlugin({
            ROAR_DB: JSON.stringify(roarDB),
          }),
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        ],
      };
    
      switch (args.mode) {
        case 'development':
          return merge(developmentConfig, envDependentConfig);
        case 'production':
          return merge(productionConfig, envDependentConfig);
        default:
          throw new Error('No matching configuration was found!');
      }
    };
```
### Sample `rollup.config.js` from roar-swr:

``` javascript
    import commonjs from '@rollup/plugin-commonjs';
    import postcss from 'rollup-plugin-postcss';
    import dsv from '@rollup/plugin-dsv';
    import json from '@rollup/plugin-json';
    import terser from '@rollup/plugin-terser';
    import { nodeResolve } from '@rollup/plugin-node-resolve';
    import { sentryRollupPlugin } from '@sentry/rollup-plugin';
    import 'dotenv/config';
    
    export default {
      input: 'src/index.js',
      plugins: [
        postcss({
          extract: 'resources/roar-swr.css',
        }),
        dsv(),
        json(),
        nodeResolve({
          preferBuiltins: true,
        }),
        terser(),
        commonjs(),
        sentryRollupPlugin({
          org: 'roar-89588e380',
          project: 'swr',
          authToken: process.env.SENTRY_AUTH_TOKEN,
        }),
      ],
      output: [
        {
          dir: 'lib',
          name: '@bdelab/roar-swr',
          entryFileNames: '[name].[hash].js',
          chunkFileNames: '[name].[hash].js',
          format: 'es',
          sourcemap: true,
        },
      ],
    };
```
### Create Staging and Production Hosting Targets on gse-roar-assessment Project

From the `gse-roar-assessment` Firebase project, navigate to "Hosting" on the left hand side.
1. Click "add another site" in the top right corner
2. Name the hosting targets with the following convention:
   - _[roar][roam][roav]-app-name_
   - _[roar][roam][roav]-app-name-staging_
3. For example, an app named "roar-word" would have the following hosting targets:
   - https://roar-word.web.app
   - https://roar-word-staging.web.app


### Ensure firebaseConfig.js Points to the Correct Firebase Configs 

`serve/firebaseConfig.js`:

``` javascript
/* eslint-disable import/prefer-default-export */
import { log } from '../src/experiment/config/logger';

/* eslint-disable import/prefer-default-export */
const devFirebaseConfig = {
  apiKey: 'AIzaSyCX9WR-j9yv1giYeFsMpbjj2G3p7jNHxIU',
  authDomain: 'gse-yeatmanlab.firebaseapp.com',
  projectId: 'gse-yeatmanlab',
  storageBucket: 'gse-yeatmanlab.appspot.com',
  messagingSenderId: '292331000426',
  appId: '1:292331000426:web:91a04220991e3405737013',
  measurementId: 'G-0TBTMDS993',
};

const productionFirebaseConfig = {
  apiKey: 'AIzaSyDw0TnTXbvRyoVo5_oa_muhXk9q7783k_g',
  authDomain: 'gse-roar-assessment.firebaseapp.com',
  projectId: 'gse-roar-assessment',
  storageBucket: 'gse-roar-assessment.appspot.com',
  messagingSenderId: '757277423033',
  appId: '1:757277423033:web:d6e204ee2dd1047cb77268',
};

export const firebaseConfig =
  // eslint-disable-next-line no-undef
  ROAR_DB === 'production' ? productionFirebaseConfig : devFirebaseConfig;

export const roarConfig = {
  firebaseConfig,
};

// eslint-disable-next-line operator-linebreak
const logMessage = `This ROAR app will write data to the ${roarConfig.firebaseConfig.projectId} firestore database`;
log.info(logMessage);`
```

### Modify .firebaserc to deploy to the designated targets.
`.firebaserc`:
```
{
  "projects": {
    "default": "gse-roar-assessment"
  },
  "targets": {
    "gse-roar-assessment": {
      "hosting": {
        "production": [
          "[name of production target in gse-roar-assessment hosting]"
        ],
        "staging": [
          "[name of staging target in gse-roar-assessment hosting]"
        ],
      }
    }
  }
}
```

### Set the Deployment Targets Using gcloud CLI:
1. Install the Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Add a default Firebase project:
   ```bash
   firebase use --add
   ```
3. Select the project `gse-roar-assessment`

4. Set the deployment targets:
    ```bash
    firebase target:apply hosting production [name of production target in gse-roar-assessment hosting]
    firebase target:apply hosting staging [name of staging target in gse-roar-assessment hosting]
    ```
5. Ensure that firebase.json targets are set to "production" and "staging" 

`firebase.json`:

``` javascript
{
  "hosting": [
    {
      "public": "dist",
      "target": "production",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ],
      "headers": [
        {
          "source": "**/*",
          "headers": [
            {
              "key": "Feature-Policy",
              "value": "autoplay=*"
            }
          ]
        }
      ]
    },
    {
      "public": "dist",
      "target": "staging",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ],
      "headers": [
        {
          "source": "**/*",
          "headers": [
            {
              "key": "Feature-Policy",
              "value": "autoplay=*"
            }
          ]
        }
      ]
    }
  ]
}
```
### Service Account Key for Firebase Deployment
Each app will need a Firebase service account .json file to deploy to Firebase. 
The Firebase service account authorizes the app to access Firebase services using a set of credentials. 
The service account key is a JSON file that contains the necessary credentials to authenticate the app with Firebase services.
This file should be stored in the GitHub repository action secrets.

**To create a service account key:**
1. Navigate to the Firebase console and select the "gse-roar-assessment" project.
2. Click on the gear icon in the top left corner and select "Project settings".
3. Navigate to the "Service accounts" tab.
4. Click on "Generate new private key".
5. Save the JSON file to the local machine (you may need it for additional Firebase actions).
6. Copy/paste the entire JSON file to the GitHub repository secrets as `FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT`.

### Setup Automated Workflows
GitHub actions ensure a consistent deployment environment where automated testing and monitoring
are able to catch any new or regressive bugs that might have occurred in development.

1. Create a new directory at the root of the project to hold the workflow files
   - `~/.github/workflows`
2. Add the pull request template into the `.github/` directory
   - `PULL_REQUEST_TEMPLATE.md`:
     - ```markdown
         ## Proposed changes
     
        <!--
        Describe your changes here. Why are they necessary?
    
        If it fixes a bug or resolves a feature request, be sure to link to that issue.
    
        If appropriate, include images of the expected behavior or user experience.
        You can drag and drop images into this text box.
        -->
    
        ## Types of changes
    
        What types of changes does this pull request introduce?
    
        <!-- Put an `x` in the boxes that apply -->
    
        - [ ] Bugfix (non-breaking change which fixes an issue)
          - [ ] New feature (non-breaking change which adds functionality)
          - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
          - [ ] Refactoring (non-breaking change that does not add functionality but makes code cleaner or more efficient)
          - [ ] Documentation Update
          - [ ] Tests (new or updated tests)
          - [ ] Style (changes to code styling)
          - [ ] CI (continuous integration changes)
          - [ ] Repository Maintenance
          - [ ] Other (please describe below)
    
        ## Checklist
    
        <!--
        Put an `x` in the boxes that apply. You can also fill these out after creating
        the PR. If you're unsure about any of them, don't hesitate to ask.  We're here
        to help! This is simply a reminder of what we are going to look for before
        merging your code.
        -->
    
        - [ ] I have read the [guidelines for contributing](https://github.com/yeatmanlab/roar-dashboard/blob/main/.github/CONTRIBUTING.md).
          - [ ] The changes in this PR are as small as they can be. They represent one and only one fix or enhancement.
          - [ ] Linting checks pass with my changes.
          - [ ] Any existing unit tests pass with my changes.
          - [ ] Any existing end-to-end tests pass with my changes.
          - [ ] I have added tests that prove my fix is effective or that my feature works.
          - [ ] If this PR fixes an existing issue, I have added a unit or end-to-end test that will detect if this issue reoccurs.
          - [ ] I have added JSDoc comments as appropriate.
          - [ ] I have added the necessary documentation to the [roar-docs repository](https://github.com/yeatmanlab/roar-docs).
          - [ ] I have shared this PR on the roar-pr-reviews channel (if I have access)
          - [ ] I have linked relevant issues (if any)
    
        ## Justification of missing checklist items
    
        <!--
        If you feel that a checklist item above is not applicable to this PR, please
        provide your justification here. Otherwise, delete this section.
        -->
    
        ## Further comments
    
        <!--
        If this is a relatively large or complex change, kick off the discussion by
        explaining why you chose the solution you did and what alternatives you
        considered, etc...
        -->
        ```
3. Copy the following GitHub workflow files into the workflows folder (we will create and add the necessary secrets to the GitHub repo in a later step)
   - `firebase-hosting-merge.yml`:
     - ```yaml
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
   - `deploy-firebase-test-cypress.yml`:
     - ```yaml
         name: Firebase Deploy to Staging and Cypress e2e Tests
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
    
           cypress_run:
             needs: [build_and_preview]
             runs-on: ubuntu-latest
             timeout-minutes: 60
             strategy:
               fail-fast: false
               matrix:
                 browser: [chromium, edge]
                 containers: [1, 2]
             env:
               CYPRESS_BASE_URL: ${{ needs.build_and_preview.outputs.deployUrl }}
               CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
               COMMIT_INFO_MESSAGE: Tests for PR ${{ github.event.number }} "${{ github.event.pull_request.title }}" from commit "${{ github.event.pull_request.head.sha }}"
               COMMIT_INFO_SHA: ${{ github.event.pull_request.head.sha }}
               GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
             steps:
               - name: Checkout
                 uses: actions/checkout@v4
               - name: Cypress run
                 uses: cypress-io/github-action@v6
                 with:
                   browser: ${{ matrix.browser }}
                   headed: true
                   build: echo "Build step already completed"
                   start: echo "App already deployed to Firebase"
                   wait-on: ${{ env.CYPRESS_BASE_URL }}
                   wait-on-timeout: 60
                   record: true
                   parallel: true
                   spec: 'cypress/e2e/**/*'
                   ci-build-id: ${{ github.run_id }}-${{ matrix.browser }}
         ```

   - `publish-to-npm-create-new-release.yml`:
     - ```yaml
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
                            
             - name: Notify on Failure
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

   - `submit-dashboard-pr.yml`:
     - ```yaml
        name: Update dependency version in ROAR-dashboard
        
        on:
          workflow_run:
            workflows: ['Publish, Release, and Deploy']
            types:
              - completed
        
        jobs:
          update-version:
            runs-on: ubuntu-latest
        
            if: ${{ github.event.workflow_run.conclusion == 'success' }}
        
            steps:
              - name: Checkout the repository
                uses: actions/checkout@v2
        
              - name: Get the new version
                id: get_new_version
                run: |
                  VERSION=$(jq -r '.version' package.json)
                  echo "NEW_VERSION=$VERSION" >> $GITHUB_OUTPUT
        
              - name: Checkout the target repository
                uses: actions/checkout@v2
                with:
                  repository: yeatmanlab/roar-dashboard
                  token: ${{ secrets.DASHBOARD_REPO_TOKEN }}
                  path: dashboard-repo
        
              - name: Update version in package.json
                run: |
                  cd dashboard-repo
                  NEW_VERSION=${{ steps.get_new_version.outputs.NEW_VERSION }}
                  jq --arg ver "$NEW_VERSION" '.dependencies["@bdelab/roar-swr"] = $ver' package.json > temp.json && mv temp.json package.json
                  npm i
        
              - name: Create Pull Request
                uses: peter-evans/create-pull-request@v4
                with:
                  path: dashboard-repo
                  token: ${{ secrets.DASHBOARD_REPO_TOKEN }}
                  commit-message: Update SWR version to ${{ steps.get_new_version.outputs.NEW_VERSION }}
                  branch: dep/update-swr-${{ steps.get_new_version.outputs.NEW_VERSION }}
                  base: main
                  title: Update SWR version to ${{ steps.get_new_version.outputs.NEW_VERSION }}
                  body: |
                    This PR updates the version of `@bdelab/roar-swr` to ${{ steps.get_new_version.outputs.NEW_VERSION }}.
        
        ```