'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const Helpers = require('./helpers.js');
const Optimization = require('./optimization.js');
const BaseLoaders = require('./loaders/index.js');

module.exports = {
  name: 'laravel-bundler',
  context: process.cwd(),
  mode: Helpers.nodeEnv(),
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json']
  },
  entry: {},
  output: {
    clean: true,
    path: path.resolve(process.cwd(), 'public/dist'),
    publicPath: 'auto',
    filename: `js/[name]${Helpers.hash()}.js`,
    chunkFilename: `js/chunks/[name]${Helpers.hash('chunkhash')}.js`,
    globalObject: 'this',
    pathinfo: false,
  },

  module: {
    rules: BaseLoaders
  },

  optimization: Optimization,

  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name]${Helpers.hash('contenthash')}.css`
    }),
    new CaseSensitivePathsPlugin(),
  ].concat((Helpers.isHmr() || Helpers.isWatch()) ? [
    // Workaround
    // We need this plugin only for inline source maps
    new webpack.SourceMapDevToolPlugin(),
  ] : []),

  devtool: Helpers.devTool(),
  bail: Helpers.isProduction(),
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
