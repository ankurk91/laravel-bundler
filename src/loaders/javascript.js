const Helpers = require('../helpers');
const fs = require('fs');
const path = require('path');

const loaderOptions = {
  cacheDirectory: Helpers.isProduction()
};

const babelConfigs = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: false,
        forceAllTransforms: Helpers.isProduction(),
        useBuiltIns: false,
        targets: {
          // https://browserl.ist/?q=%3E+1%25%2C+not+IE+11
          browsers: ['> 1%', 'not IE 11']
        }
      }
    ]
  ],
  plugins: [],
};

function userConfigExists() {
  return ['.babelrc', '.babelrc.js', 'babel.config.js'].some((file) => {
    return fs.existsSync(path.resolve(process.cwd(), file));
  })
}

module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: Object.assign({}, loaderOptions, userConfigExists() ? {} : babelConfigs)
};
