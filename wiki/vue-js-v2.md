## Vue.js v2.7+

* Install required dependencies

```bash
npm install vue@^2.7 vue-loader@^15.10
```

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
* You can use CSS or SCSS within Vue SFC, if you want other pre-processor support; you need to configure them manually.
