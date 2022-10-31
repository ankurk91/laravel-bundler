import Helpers from '../helpers.js';

// You must install `ts-loader` and `typescript` in your project

export default {
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
