// https://webpack.js.org/configuration/dev-server/
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    https: false,
    noInfo: true,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    port: 8080,
    publicPath: '//localhost:8080/',
    stats: 'errors-only',
  },
};
