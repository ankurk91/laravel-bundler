const Helpers = require('../helpers');
const fs = require('fs');
const path = require('path');

function getDefaultBabelConfig() {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          modules: false,
          forceAllTransforms: Helpers.isProduction(),
          targets: {
            browsers: ['> 2%']
          }
        }
      ]
    ],
    plugins: [],
  };
}

const fileNames = ['.babelrc', '.babelrc.js', 'babel.config.js'];

function userConfigExists() {
  return fileNames.some((file) => {
    return fs.existsSync(path.resolve(process.cwd(), file));
  })
}

module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: userConfigExists() ? {} : getDefaultBabelConfig()
};
