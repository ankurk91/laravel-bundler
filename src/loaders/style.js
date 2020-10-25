const Helpers = require('../helpers.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultPostCssConfig = {
  plugins: [
    'postcss-preset-env',
  ]
};

module.exports = {
  // Handle css and scss both
  test: /\.s[ac]ss|\.css/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: false,
      }
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        modules: false,
        esModule: false,
        importLoaders: 2,
      }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: defaultPostCssConfig
      }
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: Helpers.sourceMapEnabled(),
        additionalData: '$env: ' + Helpers.nodeEnv() + ';',
        sassOptions: {
          outputStyle: 'expanded'
        },
      }
    },
  ]
};
