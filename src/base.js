'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Helpers = require('./helpers');
const BaseLoaders = require('./loaders');

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
    rules: BaseLoaders
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
