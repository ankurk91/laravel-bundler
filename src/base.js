'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const Helpers = require('./helpers.js');
const BaseLoaders = require('./loaders/index.js');

module.exports = {
  name: 'laravel-bundler',
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
    filename: `js/[name]${Helpers.hash()}.js`,
    chunkFilename: `js/[name]${Helpers.hash('chunkhash')}.js`,
    globalObject: 'this',
    crossOriginLoading: 'anonymous',
    pathinfo: false,
  },

  module: {
    rules: BaseLoaders
  },

  optimization: {
    minimizer: Helpers.isProduction() ? [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            drop_debugger: true,
            drop_console: true,
            dead_code: true,
          }
        }
      }),
    ] : [],
  },

  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name]${Helpers.hash('contenthash')}.css`
    }),
    new CaseSensitivePathsPlugin(),
  ].concat(Helpers.isProduction() ? [
    // https://webpack.js.org/guides/caching/
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {removeAll: true}
        }],
      }
    }),
  ] : [
    // Dev only plugins
  ]).concat((Helpers.isHmr() || Helpers.isWatch()) ? [
    // Workaround
    // We need this plugin only for inline source maps
    new webpack.SourceMapDevToolPlugin(),
  ] : []),

  devtool: Helpers.devTool(),
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
    performance: Helpers.isProduction(),
  }
};
