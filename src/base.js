'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Helpers = require('./helpers');
const BaseLoaders = require('./loaders');

module.exports = {
  name: 'laravel-app',
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
  },

  module: {
    rules: BaseLoaders
  },

  optimization: {
    minimizer: Helpers.isProduction() ? [
      new TerserPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            beautify: false,
          },
          compress: {
            drop_debugger: true,
            drop_console: true,
            dead_code: true,
          }
        }
      }),
      // https://github.com/NMFR/optimize-css-assets-webpack-plugin
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          // same as css-nano options
          preset: ['default', {discardComments: {removeAll: true}}],
        }
      }),
    ] : [],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name]${Helpers.hash('contenthash')}.css`
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
