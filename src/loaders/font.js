const Helpers = require('../helpers');

module.exports = {
  // include fonts svg files only
  test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
  loader: 'file-loader',
  options: {
    name: `[folder]/[name]${Helpers.hash('hash:8')}.[ext]`,
    outputPath: 'fonts/',
    publicPath: '../fonts'
  }
};
