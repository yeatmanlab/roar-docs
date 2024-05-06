# NPM package

## Preliminary Checklist:

### Researcher
- Ensure the app code is structured appropriately.
- Gather the necessary codebase for integration.

### Developer
This is on the APP SIDE

- If the web app bundles external html, scripts, or strings:
  - Install @rollup/plugin-html and rollup-plugin-string.
- Verify package.json is configured correctly, especially the "name" field.
- ex. "name": "@bdelab/package-name"
- Check both Webpack and Rollup configurations, changing any relevant fields
- Sample `webpack.config.cjs` from roar-swr:

`const path = require('path');
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
`
- Sample `rollup.config.js` from roar-swr:

`import commonjs from '@rollup/plugin-commonjs';
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
`
- Create staging and production hosting targets on gse-roar-assessment.
- Ensure firebaseConfig.js points to the correct Firebase configs.
`serve/firebaseConfig.js`
`/* eslint-disable import/prefer-default-export */
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
- Modify .firebaserc to deploy to the designated targets.
`.firebaserc`
`{
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
}`

Set the deploy targets using Firebase cli:
`firebase target:apply hosting production my-app`
`firebase target:apply hosting staging my-app`

- Update firebase.json to include deploy targets and bundling configurations.
`firebase.json`
`{
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
`
- Set up GitHub actions for PR link deployment, Cypress testing, staging deployment, and npm publishing.
- Use one of the established apps, such as roar-swr, as a template. If you have properly set up staging and hosting targets for the app, then it should suffice to copy and paste the existing workflow files.
- Add necessary secrets to the GitHub repository for npm auth token, Firebase service account, Cypress, and Sentry.


## Create projects in platforms

### Sentry Dashboard
1. Enter the Sentry dashboard with your account
2. Go to "Projects" and select "Create Project"
3. Select Browser Javascript
4. For the frequencies select "I'll create my own alerts later"
5. Add the project name and the team "#roar"
6. Once the project is created, go to the configurations of the project and copy the "Client Keys (DSN)"


### Cypress Dashboard
1. Enter the Cypress dashboard with your account
2. Go to "Projects" and select "New Project"
3. Add the project name and select "Private"
4. For the tests create only "test-pr"


## Sentry Integration
- Install Sentry packages:

``` javascript
npm install @sentry/browser@latest
npm install @sentry/integrations@latest
npm install @sentry/wasm@latest
npm install @sentry/rollup-plugin
npm install @sentry/webpack-plugin

```

Once you run this, copy the secret keys for:

- CYPRESS_RECORD_KEY
- FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT
- NPM_TOKEN
- SENTRY_AUTH_TOKEN
- SENTRY_ORG
- SENTRY_PROJECT


**Sentry wizard for readable source maps:**

1. Run the Sentry wizard for readable source maps:

    ```bash
    npx @sentry/wizard@latest -i sourcemaps
    ```

   For both webpack and rollup configurations.

**index.js:**

- Remove the "fromDashboard" if statement and always initialize Sentry.

**serve.js:**

- Remove `initSentry` from `serve.js`.

**sentry.js:**

- Copy the file but keep the DSN URL.

**Webpack Config:**

- Update the devtool configuration.

**package.json:**

- Add a `preserve:prod` script.

**GitHub Actions:**

- Add Sentry Release GitHub action to each repo.

**GitHub Environment Variables:**

- Add `SENTRY_AUTH_TOKEN` to GitHub.  
  `SENTRY_AUTH_TOKEN = get from internal integration`  
  `SENTRY_ORG = roar-89588e380`  
  `SENTRY_PROJECT = project name`



## Monitoring
- Set up Sentry projects and configurations.
- Configure Cypress projects.