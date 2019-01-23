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
