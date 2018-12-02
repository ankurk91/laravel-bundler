const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const expand = require('dotenv-expand');

function buildPlugin() {
  let filePath = path.join(process.cwd(), '.env');

  // Expand everything to process.env
  expand(
    dotenv.config({
      path: filePath
    })
  );

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

  // Filter out env vars that don't begin with MIX_.
  let filtered = Object.keys(process.env)
    .filter(key => regex.test(key))
    .reduce((value, key) => {
      value[key] = process.env[key];

      return value;
    }, {});

  let final = Object.assign(filtered, mergeWith);

  return {
    'process.env': Object.keys(final)
    // Stringify all values so they can be fed into Webpack's DefinePlugin.
      .reduce((value, key) => {
        value[key] = JSON.stringify(final[key]);

        return value;
      }, {})
  };
}

module.exports = {
  plugins: [
    buildPlugin()
  ]
};
