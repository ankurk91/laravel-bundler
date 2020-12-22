const path = require('path');
const ReloadOnBladeChange = require('../src/plugins/ReloadOnBladeChange.js');

module.exports = require('../src/index.js')({
    entry: {
      app: './resources/js/app.js',
    },
    resolve: {
      modules: [
        // this configuration is not required when consuming this package in your project
        path.resolve(process.cwd(), './../node_modules'),
      ],
    },
    plugins: [
      new ReloadOnBladeChange()
    ]
  },
  require('../src/recipes/vue-2.js')
);
