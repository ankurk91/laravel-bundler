import Helpers from '../helpers.js';

export default {
  // include all font files and svg font files that are coming from a font* directory
  test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
  loader: 'file-loader',
  options: {
    name: `[folder]/[name]${Helpers.hash('hash:8')}.[ext]`,
    outputPath: 'fonts/',
  }
};
