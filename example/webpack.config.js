const path = require('path');

module.exports = require('../src/index')({
  entry: {
    app: './resources/js/app.js',
  },
  resolve: {
    modules: [
      // this configuration is not required when using in Laravel
      path.resolve(process.cwd(), './../node_modules'),
    ],
  },
});
