const merge = require('webpack-merge');

const isHmr = process.argv.includes('--hot');

module.exports = (...userConfig) => (env, argv) =>
  merge.smart(
    require('./base'),
    !isHmr ? require('./recipes/manifest') : {},
    !isHmr ? require('./recipes/cleanOutputDir') : {},
    require('./recipes/vue'),
    require('./recipes/devServer'),
    require('./recipes/extractVendor'),
    require('./recipes/dotEnvPlugin'),
    ...userConfig
  );
