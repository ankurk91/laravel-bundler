const Helpers = require('../helpers.js');
const cosmiconfig = require('cosmiconfig');

const loaderOptions = {
  cacheDirectory: Helpers.isProduction()
};

const defaultBabelConfigs = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: false,
        useBuiltIns: false,
      }
    ]
  ],
  plugins: [],
};

// https://babeljs.io/docs/en/config-files#configuration-file-types
const userConfigExists = () => {
  return !!cosmiconfig.cosmiconfigSync('babel', {
    searchPlaces: [
      'package.json',
      '.babelrc',
      '.babelrc.json',
      '.babelrc.js',
      'babel.config.json',
      'babel.config.js',
    ]
  }).search()
};

module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: require.resolve('babel-loader'),
  exclude: /node_modules/,
  options: Object.assign({}, loaderOptions, userConfigExists() ? {} : defaultBabelConfigs)
};
