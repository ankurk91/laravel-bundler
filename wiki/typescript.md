### TypeScript

* Install required dependencies

```
yarn add ts-loader typescript --dev
```

* Generate an initial [ts-config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file in your project
  root

```
node_modules/.bin/tsc --init
```

* Update your `webpack.config.js` file like:

```js
module.exports = require('laravel-bundler')({
    entry: {
      app: './resources/js/index.ts',
    }
  },
  require('laravel-bundler/src/recipes/typescript.js')
);
```

#### Notes

* Use [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) to reduce build
  time
