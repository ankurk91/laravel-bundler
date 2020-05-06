const Helpers = require('../helpers');

module.exports = {
  // only include svg that doesn't have font in the path or file name by using negative lookahead
  test: /(\.(webp|png|jpe?g|gif|ico)$|^((?!font).)*\.svg$)/,
  loader: require.resolve('file-loader'),
  options: {
    name: `[folder]/[name]${Helpers.hash('hash:8')}.[ext]`,
    outputPath: 'images/',
    publicPath: '../images'
  }
};
