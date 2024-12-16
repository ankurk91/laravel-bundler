import path from 'path';
import {createConfig} from '../src/index.js';
import vue3Recipe from '../src/recipes/vue-3.js'

export default createConfig({
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
      //
    ]
  },
  vue3Recipe,
);
