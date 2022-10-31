'use strict';

import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

import Helpers from './helpers.js';
import Optimization from './optimization.js';
import BaseLoaders from './loaders/index.js';

export default {
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
    filename: `js/[name]${Helpers.hash('contenthash')}.js`,
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
    // Workaround:
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
