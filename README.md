# Laravel Bundler

[![downloads](https://badgen.net/npm/dt/laravel-bundler)](http://npm-stats.com/~packages/laravel-bundler)
[![npm-version](https://badgen.net/npm/v/laravel-bundler)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://badgen.net/github/tag/ankurk91/laravel-bundler)](https://github.com/ankurk91/laravel-bundler/)
[![license](https://badgen.net/github/license/ankurk91/laravel-bundler)](https://yarnpkg.com/en/package/laravel-bundler)
[![tests](https://github.com/ankurk91/laravel-bundler/workflows/tests/badge.svg)](https://github.com/ankurk91/laravel-bundler/actions)

Modern asset building tool for Laravel framework with better defaults.

## Installation
:warning: This package does not work with `laravel-mix`; you must remove `laravel-mix` before using this package
```bash
# yarn
yarn add laravel-bundler

# npm
npm install laravel-bundler 
```

## Usage
Create a `resources/js/app.js` file like
```js
// Import libraries
import 'vue';
import { BootstrapVue } from 'bootstrap-vue'
// You can import styles like this
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Write your own code
Vue.use(BootstrapVue);

new Vue({
  'el': '#app'
})
```
Create a `webpack.config.js` file on your project root and remove `webpack.mix.js` if exists.
```js
module.exports = require('laravel-bundler')({
  entry: {
    app: './resources/js/app.js',
  },
  // Other webpack configs may go here
});
```
Update your `package.json`
```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --progress --mode=development",
    "watch": "npm run dev -- --watch",
    "prod": "cross-env NODE_ENV=production webpack --mode=production",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --progress --hot"
},
"browserslist": [
    "> 2%",
    "not dead"
]  
```
Update your blade template
```blade
<!-- header -->
<link href="{{ mix('css/app.css') }}" rel="stylesheet">

<!-- footer -->
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
```
Update your `.gitignore`
```git exclude
/public/hot
/public/js
/public/css
/public/fonts
/public/images
/public/mix-manifest.json
```

### Baked Features
* Webpack 4, Babel 7 with `@babel/preset-env`
* Vue.js v2 support - [Recipe](https://github.com/ankurk91/laravel-bundler/wiki/Vue.js-v2-Recipe)
* `CSS` and `SASS|SCSS` with CSS modules support
* PostCSS loader with `autoprefixer` and `cssnano`
* Font and image files handling
* HMR support, even for CSS :fire:
* Extract all css to a separate file (based on entry)
* Accepts css/scss file as entry
* Extract all vendor js to a separate file 
* Clean output directories just before successful build
* `mix-manifest.json` compatible with Laravel's `mix()` helper
* Load environment variables from `.env` file that are prefixed with `MIX_`
* Intelligent SourceMap based on mode

### Documentation
* [Wiki](https://github.com/ankurk91/laravel-bundler/wiki) in progress

### Not in the plan
These features are not in the plan but can be enabled on demand
* [OS Notification](https://github.com/Turbo87/webpack-notifier) - [Recipe](https://github.com/ankurk91/laravel-bundler/wiki/OS-Notification-Recipe)
* [BrowserSync](https://github.com/Va1/browser-sync-webpack-plugin) 
* [Copy files and folder](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Image compression](https://github.com/vanwagonet/img-loader)
* CSS Preprocessors other than `sass|scss`
* Additional Babel plugins

## License
[MIT](LICENSE.txt) License
