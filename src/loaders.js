const Helpers = require('./helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            forceAllTransforms: Helpers.isProduction(),
            targets: {
              browsers: [
                //Support browsers that have more than x% market share
                '> 2%',
              ]
            }
          }
        ]
      ],
      plugins: [],
    }
  },
  // surprisingly this is also handling css
  {
    test: /\.s?[ac]ss$/,
    use: [
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: Helpers.isDev(),
          importLoaders: 1,
        }
      },
      Helpers.isProduction() ?
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            ident: 'postcss',
            plugins: () => [
              require('autoprefixer')(),
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
          minimize: Helpers.isProduction()
        }
      },
    ].filter(Boolean),
  },
  {
    // only include svg that doesn't have font in the path or file name by using negative lookahead
    test: /(\.(webp|png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
    loader: 'file-loader',
    options: {
      name: '[folder]/[name]-[hash].[ext]',
      outputPath: 'images/',
      publicPath: '../images'
    }
  },
  {
    // include fonts svg files only
    test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
    loader: 'file-loader',
    options: {
      name: '[folder]/[name]-[hash].[ext]',
      outputPath: 'fonts/',
      publicPath: '../fonts'
    }
  }
];
