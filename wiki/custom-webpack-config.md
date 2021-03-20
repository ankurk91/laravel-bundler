## Custom webpack configs

Laravel-Bundler is using [webpack-merge](https://github.com/survivejs/webpack-merge) to merge various configurations.

You can supply any valid configuration, see available webpack [configs](https://webpack.js.org/configuration/).

Here is the example `webpack.config.js` file:

```js
const webpack = require('webpack');

module.exports = require('laravel-bundler')({
    entry: {
      app: './resources/js/app.js',
      admin: './resources/js/admin/app.js',
    },
    output: {},
    plugins: [
        // Your plugins
    ],
    module: {
      rules: []
    },
  },
);
```
