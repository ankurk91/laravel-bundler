const Helpers = require('../helpers.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultPostCssConfig = {
  plugins: [
    require('autoprefixer')(),
    Helpers.isProduction() ? require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        }]
    }) : false
  ].filter(Boolean)
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
        additionalData: '$env: ' + process.env.NODE_ENV + ';',
        sassOptions: {
          outputStyle: 'expanded'
        },
      }
    },
  ]
};
