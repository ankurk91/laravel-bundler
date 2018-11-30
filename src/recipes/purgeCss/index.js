const Helpers = require('../../helpers');
const PurgecssPlugin = Helpers.ensureModule('purgecss-webpack-plugin');
const pluginOptions = require('./options');

module.exports = {
  plugins: [
    new PurgecssPlugin(pluginOptions)
  ]
};
