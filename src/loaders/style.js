const Helpers = require('../helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Fiber = require('fibers');

module.exports = {
  // Handle css and scss both
  test: /\.s[ac]ss|\.css/,
  use: [
    'css-hot-loader', // will auto disable itself in modes other than hmr
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: Helpers.isDev(),
        importLoaders: Helpers.isProduction() ? 2 : 1,
      }
    },
    Helpers.isProduction() ?
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          ident: 'postcss',
          plugins: () => [
            require('autoprefixer')({
              browsers: ['> 2%']
            }),
            require('cssnano')({
              preset: ['default', {
                discardComments: {
                  removeAll: true,
                },
              }]
            })
          ]
        }
      } : false,
    {
      loader: 'sass-loader',
      options: {
        sourceMap: Helpers.isDev(),
        minimize: Helpers.isProduction(),
        implementation: require('sass'),
        fiber: Fiber,
      }
    },
  ].filter(Boolean),
};
