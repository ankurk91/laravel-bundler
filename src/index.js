const merge = require('webpack-merge');

module.exports = userConfig => (env, argv) =>
  merge.smart(
    require('./base'),
    require('./recipes/manifest'),
    require('./recipes/cleanOutputDir'),
    require('./recipes/vue'),
    require('./recipes/devServer'),
    require('./recipes/extractVendor'),
    require('./recipes/dotEnvPlugin'),
    userConfig
  );
