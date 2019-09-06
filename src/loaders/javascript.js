const Helpers = require('../helpers');
const cosmiconfig = Helpers.ensureModule('cosmiconfig');

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

const userConfigExists = () => {
  return !!cosmiconfig('babel', {
    searchPlaces: [
      'package.json',
      '.babelrc',
      '.babelrc.js',
      'babel.config.js'
    ]
  }).searchSync()
};

module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: Object.assign({}, loaderOptions, userConfigExists() ? {} : defaultBabelConfigs)
};
