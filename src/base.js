'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Helpers = require('./helpers');

module.exports = {
  context: process.cwd(),
  mode: 'development',
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json']
  },
  entry: {},
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: Helpers.shouldVersion() ? 'js/[name]-[hash].js' : 'js/[name].js',
    chunkFilename: Helpers.shouldVersion() ? 'js/[name]-[chunkhash].js' : 'js/[name].js',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/env',
              {
                modules: false,
                forceAllTransforms: true,
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
    ]
  },

  optimization: {
    minimizer: [].concat(Helpers.isProduction() ? [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          output: {
            beautify: false,
            safari10: true,
          },
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      }),
      // https://github.com/NMFR/optimize-css-assets-webpack-plugin
      new OptimizeCssAssetsPlugin(),
    ] : []),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: Helpers.shouldVersion() ? 'css/[name]-[contenthash].css' : 'css/[name].css',
    }),
  ].concat(Helpers.isProduction() ? [
    // https://webpack.js.org/guides/caching/
    new webpack.HashedModuleIdsPlugin(),
  ] : [
    // https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    new webpack.SourceMapDevToolPlugin(),
  ]),

  devtool: Helpers.isProduction() ? false : '#cheap-module-eval-source-map',
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  }
};
