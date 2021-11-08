'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const browserslistToEsbuild = require('browserslist-to-esbuild');

const Helpers = require('./helpers.js');
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

  optimization: {
    minimize: Helpers.isProduction(),
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
        terserOptions: {
          legalComments: 'none',
          target: browserslistToEsbuild(),
          pure: ['console.log'],
        }
      }),
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.esbuildMinify,
        minimizerOptions: {
          legalComments: 'none',
          target: browserslistToEsbuild(),
        },
        warningsFilter: (warning, file, source) => {
          if (/"@charset" must be the first rule in the file/i.test(warning)) {
            return true;
          }

          return false;
        },
      }),
    ]
  },

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
