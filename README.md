# Laravel Bundler

[![downloads](https://badgen.net/npm/dt/laravel-bundler)](http://npm-stats.com/~packages/laravel-bundler)
[![npm-version](https://badgen.net/npm/v/laravel-bundler)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://badgen.net/github/tag/ankurk91/laravel-bundler)](https://github.com/ankurk91/laravel-bundler/)
[![license](https://badgen.net/github/license/ankurk91/laravel-bundler)](https://yarnpkg.com/en/package/laravel-bundler)
[![tests](https://github.com/ankurk91/laravel-bundler/workflows/tests/badge.svg)](https://github.com/ankurk91/laravel-bundler/actions)
[![install size](https://packagephobia.com/badge?p=laravel-bundler)](https://packagephobia.com/result?p=laravel-bundler)

Modern asset building tool for Laravel framework with better defaults.

## Installation
:warning: This package does not work with `laravel-mix`; you must remove `laravel-mix` before using this one
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
const webpack = require('webpack');
const ReloadOnBladeChange = require('laravel-bundler/src/plugins/ReloadOnBladeChange.js');

module.exports = require('laravel-bundler')({
      entry: {
        app: './resources/js/app.js',
      },
      plugins: [
        new ReloadOnBladeChange()
      ],
      // Other webpack configs may go here
    },
    require('laravel-bundler/src/recipes/vue-2.js')
);
```
Update your `package.json` file
```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --progress --mode=development",
    "watch": "npm run dev -- --watch",
    "prod": "cross-env NODE_ENV=production webpack --mode=production",
    "hot": "cross-env NODE_ENV=development webpack serve --progress --hot"
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
Update your `.gitignore` file
```git exclude
/public/hot
/public/js
/public/css
/public/fonts
/public/images
/public/mix-manifest.json
```

### Baked Features
* Webpack 5 and Babel 7 with `@babel/preset-env`
* Vue.js v2 support - [Recipe](./wiki/vue-js-v2.md)
* Vue.js v3 support - [Recipe](./wiki/vue-js-v3.md)
* `CSS` and `SASS|SCSS` support
* PostCSS loader preconfigured with `autoprefixer` and `cssnano`
* Font and image files handling
* Full HMR support for Vue, even for CSS :fire:
* Extract all css to a separate file (based on entry)
* Accepts css/scss file as entry
* Extract all vendor js to a separate file 
* Clean output directories just before successful build
* `mix-manifest.json` compatible with Laravel's `mix()` helper
* Load environment variables from `.env` file that are prefixed with `MIX_` :wink:
* Intelligent SourceMap based on mode
* Can auto-reload browser on blade template change (opt-in feature) :rocket:

### Documentation
* [Read the docs](./wiki) 

### Not in the plan
These features are not in the plan but can be enabled on demand :man_shrugging:
* [Build Notification](https://github.com/RoccoC/webpack-build-notifier) 
* [Copy files and folder](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Image compression](https://github.com/webpack-contrib/image-minimizer-webpack-plugin)
* CSS Preprocessors other than `sass|scss`
* Additional Babel plugins

## License
[MIT](LICENSE.txt) License
