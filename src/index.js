import webpackMerge from 'webpack-merge';
import Helpers from './helpers.js';
import baseConfig from './base.js';
import manifestConfig from './recipes/manifest.js';
import devServerConfig from './recipes/devServer.js';
import extractVendorConfig from './recipes/extractVendor.js';
import dotenvConfig from './recipes/dotEnvPlugin.js';

const createConfig = (...userConfig) => (env, argv) => {
  return webpackMerge.merge(
    baseConfig,
    !Helpers.isHmr() ? manifestConfig : {},
    devServerConfig,
    extractVendorConfig,
    dotenvConfig,
    ...userConfig
  );
}

export {createConfig};
