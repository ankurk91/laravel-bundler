// https://webpack.js.org/configuration/dev-server/
const path = require('path');
const HMRDetectPlugin = require('../plugins/HMRDetectPlugin');

module.exports = {
  devServer: {
    before: (app, server) => {
      app.get('/', (req, res) => {
        res.set('Content-Type', 'text/html');
        res.send(`
<html>
<head>
<title>Webpack dev server</title>
</head>
<body>
<h1>Your assets will se served from this address.</h1>
<h2>You should visit your application as normal.</h2>
</body>
</html>`.trim());
      });
    },
    contentBase: path.resolve(process.cwd(), 'public'),
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    headers: {
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
  },
  plugins: [
    new HMRDetectPlugin()
  ]
};
