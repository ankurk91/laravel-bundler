## Vue.js v3.x

* Install required dependencies

```bash
npm install vue@^3.0 vue-loader@^17
```

* Update your `webpack.config.js` like:

```js
module.exports = require('laravel-bundler')({
    entry: {
      app: './resources/js/index.js',
    }
  },
  require('laravel-bundler/src/recipes/vue-3.js')
);
```

#### Notes

* Your styles from `*.vue` SFC will be extracted and merged with the main `app.css`.
* You can use CSS or SCSS within Vue SFC, if you want other pre-processor support; you need to configure them manually.
