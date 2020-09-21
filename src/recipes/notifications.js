const Helpers = require('../helpers.js');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Laravel',
      excludeWarnings: true,
      alwaysNotify: false,
      contentImage: path.resolve(__dirname, '../static/laravel-logo.png'),
      sound: false
    }),
  ]
};
