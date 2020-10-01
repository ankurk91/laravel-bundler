## OS Notifications

If you want to receive build notification, follow these steps.

* Install dependencies
```
yarn add --dev webpack-notifier
```

* Update your `webpack.config.js` like:
```js
module.exports = require('laravel-bundler')({
  entry: {
    app: './resources/js/app.js',
  },
},
require('laravel-bundler/src/recipes/notifications.js')
);
```
