# Installing the Necessary Dependencies

Install the following packages to run the Firebase emulators:

```bash
npm install buffer cypress-fs dotenv-webpack events firebase-tools path-browserify stream-browserify util wait-on --save-dev
```

## Webpack Configuration
Add the following to the top level of the `webpack.config.js` file:

```javascript
const Dotenv = require('dotenv-webpack');
```

Add the following to the `envDependentConfig.plugins` array in the `webpack.config.js` file:

```javascript
new Dotenv({path: './.env'})
```

Add the following key-value pairs to the `resolve.fallback` object in `webpack.config.js`:

```
resolve: 
  fallback: {
    path: require.resolve('path-browserify'),
    util: require.resolve('util/'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    events: require.resolve('events/')
  }
}
```

### .gitignore
Add the following to the `.gitignore` file:

```
.env
.env.test
```