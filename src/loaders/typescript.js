const Helpers = require('../helpers');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: Helpers.isHmr(),
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
