const path = require('path');
const ReloadOnBladeChange = require('../src/plugins/ReloadOnBladeChange.js');

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
    plugins: [
      // todo temporary disabled
      //new ReloadOnBladeChange()
    ]
  },
  require('../src/recipes/vue-2.js')
);
