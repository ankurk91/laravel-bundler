const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const expand = require('dotenv-expand');
const chalk = require('chalk');

function buildPlugin() {
  let filePath = path.join(process.cwd(), '.env');

  // Expand everything to process.env
  const result = dotenv.config({
    path: filePath,
  });

  // We wont stop process if we could not load .env
  if (result.error) {
    console.log(chalk.bold.yellow("\n" + `WARN: Unable to load variables from .env file.`));
    console.log(result.error.message);
  }

  expand(result);

  return new webpack.DefinePlugin(
    getDefinitions({
      NODE_ENV: process.env.NODE_ENV || 'development'
    })
  );
}

// Copied from
// https://github.com/JeffreyWay/laravel-mix/blob/master/src/webpackPlugins/MixDefinitionsPlugin.js
function getDefinitions(mergeWith) {
  let regex = /^MIX_/i;

  // Filter out env vars that don't begin with MIX_
  let filtered = Object.keys(process.env)
    .filter(key => regex.test(key))
    .reduce((value, key) => {
      value[key] = process.env[key];

      return value;
    }, {});

  let envVars = Object.assign(filtered, mergeWith);

  return Object.keys(envVars)
    // Stringify all values so they can be fed into Webpack's DefinePlugin.
    .reduce((value, key) => {
        value[`process.env.${key}`] = JSON.stringify(envVars[key]);

        return value;
      }, {}
    );
}

module.exports = {
  plugins: [
    buildPlugin()
  ]
};
