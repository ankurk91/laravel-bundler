const Helpers = require('../helpers.js');

// You must install `ts-loader` and `typescript` in your project
// It is recommended to use
// https://www.npmjs.com/package/fork-ts-checker-webpack-plugin

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: Helpers.isHmr(),
          experimentalWatchApi: true,
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts',]
  },
}
