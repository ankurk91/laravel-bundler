const merge = require('webpack-merge');
const Helpers = require('./helpers');

module.exports = (...userConfig) => (env, argv) =>
  merge.smart(
    require('./base'),
    !Helpers.isHmr() ? require('./recipes/manifest') : {},
    !Helpers.isHmr() ? require('./recipes/cleanOutputDir') : {},
    require('./recipes/vue'),
    require('./recipes/devServer'),
    require('./recipes/extractVendor'),
    require('./recipes/dotEnvPlugin'),
    ...userConfig
  );
