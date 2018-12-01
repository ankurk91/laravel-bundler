// https://webpack.js.org/configuration/dev-server/
const path = require('path');
const HMRDetectPlugin = require('../plugins/HMRDetectPlugin');
const Helpers = require('../helpers');

module.exports = {
  output: {},
  devServer: {
    before: (app, server) => {
      app.get('/', (req, res) => {
        res.set('Content-Type', 'text/html');
        res.send(`
<html lang="en">
<head>
<title>Webpack dev server</title>
</head>
<body>
<h1>Your Laravel assets will se served from this address.</h1>
<h2>You should visit your application as normal.</h2>
</body>
</html>`.trim());
      });
    },
    contentBase: path.resolve(process.cwd(), 'public'),
    host: 'localhost',
    hot: true,
    historyApiFallback: false,
    headers: {
      // allows cross domain access to fonts
      'Access-Control-Allow-Origin': '*',
    },
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    port: 8080,
    publicPath: '//localhost:8080/',
    stats: 'errors-only',
    logTime: true,
  },
  plugins: [
    new HMRDetectPlugin()
  ]
};

if (Helpers.isHmr()) {
  // This is required to make HMR work,
  // specially when main application is running on a different domain than dev server
  module.exports.output.publicPath = module.exports.devServer.publicPath;
}
