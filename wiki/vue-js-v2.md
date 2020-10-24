## Vue.js v2.x

* Install required dependencies 
```
yarn add vue@^2.0 vue-template-compiler@^2.0 vue-loader@^15.0
```
:warning: `vue` and `vue-template-compiler` versions must be same. 

* Update your `webpack.config.js` like:
```js
module.exports = require('laravel-bundler')({
    entry: {
      app: './resources/js/index.js',
    }
  },
  require('laravel-bundler/src/recipes/vue-2.js')
);
```

#### Notes
* Your styles from `*.vue` SFC will be extracted and merged with the main `app.css`.
* You can use css or sass within vue SFC, if you want other pre-processor support; you need to configure them manually.
