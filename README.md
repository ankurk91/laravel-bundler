# Laravel Bundler

[![downloads](https://img.shields.io/npm/dt/laravel-bundler.svg)](http://npm-stats.com/~packages/laravel-bundler)
[![npm-version](https://img.shields.io/npm/v/laravel-bundler.svg)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://img.shields.io/github/tag/ankurk91/laravel-bundler.svg?maxAge=1800)](https://github.com/ankurk91/laravel-bundler/)
[![license](https://img.shields.io/github/license/ankurk91/laravel-bundler.svg?maxAge=1800)](https://yarnpkg.com/en/package/laravel-bundler)
[![build-status](https://travis-ci.com/ankurk91/laravel-bundler.svg?branch=master)](https://travis-ci.com/ankurk91/laravel-bundler)

Modern asset building tool for Laravel framework.

## Installation
:warning: This package does not work with `laravel-mix`; you should remove `laravel-mix` before using this one
```bash
# npm
npm install laravel-bundler 

# yarn
yarn add laravel-bundler
```

## Usage
Create a `webpack.config.js` file on your project root
```js
module.exports = require('laravel-bundler')({
  entry: {
    app: './resources/js/app.js',
  },
});
```
Update your `package.json`
```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --progress --mode development",
    "watch": "npm run dev -- --watch",
    "prod": "cross-env NODE_ENV=production webpack --progress --mode production",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --progress --hot"
  },
```
Update your blade template
```blade
<link href="{{ mix('css/app.css') }}" rel="stylesheet" media="all">
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
* Vue.js support
* `CSS|SASS|SCSS` support
* Font files and images handling
* HMR support, even for CSS
* Extract all css to a separate file based on entry name
* Extract all vendor js to a file
* PostCSS loader with `autoprefixer` and `cssnano`
* Clean output directories before build
* `mix-manifest.json` compatible with Laravel's `mix()` helper
* Load environment variables from `.env` file that prefixed are with `MIX_`
* SourceMap support in development

### InProgress
* [Documentation](https://github.com/ankurk91/laravel-bundler/wiki)

### Not in the plan
These features are not in the plan but can be enabled on demand
* [OS Notification](https://github.com/Turbo87/webpack-notifier) 
* [PurgeCSS](https://github.com/FullHuman/purgecss-webpack-plugin)
* [BrowserSync](https://github.com/Va1/browser-sync-webpack-plugin) 
* [Copy files and folder](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Image compression](https://github.com/vanwagonet/img-loader)
* CSS Preprocessors other than `sass|scss`
* Non webpack methods like `minify|combine|babel|standaloneSass` etc
* Babel plugins

## License
[MIT](LICENSE.txt) License
