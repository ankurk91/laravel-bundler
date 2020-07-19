const webpackMerge = require('webpack-merge');
const Helpers = require('./helpers.js');

module.exports = (...userConfig) => (env, argv) =>
  webpackMerge.merge(
    require('./base.js'),
    !Helpers.isHmr() ? require('./recipes/manifest.js') : {},
    !Helpers.isHmr() ? require('./recipes/cleanOutputDir.js') : {},
    require('./recipes/vue-2.js'),
    require('./recipes/devServer.js'),
    require('./recipes/extractVendor.js'),
    require('./recipes/dotEnvPlugin.js'),
    ...userConfig
  );
