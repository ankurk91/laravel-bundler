import Helpers from '../helpers.js';

export default {
  // only include svg that doesn't have font in the path or file name by using negative lookahead
  test: /(\.(webp|png|jpe?g|gif|ico)$|^((?!font).)*\.svg$)/,
  loader: 'file-loader',
  options: {
    name: `[folder]/[name]${Helpers.hash('hash:8')}.[ext]`,
    outputPath: 'images/',
  }
};
