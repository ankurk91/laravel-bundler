# Laravel Bundler

[![downloads](https://img.shields.io/npm/dt/laravel-bundler.svg)](http://npm-stats.com/~packages/laravel-bundler)
[![npm-version](https://img.shields.io/npm/v/laravel-bundler.svg)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://img.shields.io/github/tag/ankurk91/laravel-bundler.svg?maxAge=1800)](https://github.com/ankurk91/laravel-bundler/)
[![license](https://img.shields.io/github/license/ankurk91/laravel-bundler.svg?maxAge=1800)](https://yarnpkg.com/en/package/laravel-bundler)
[![BuildStatus](https://travis-ci.com/ankurk91/laravel-bundler.svg?branch=master)](https://travis-ci.com/ankurk91/laravel-bundler)

Modern asset building tool for Laravel framework.

## Installation
```bash
# npm
npm install laravel-bundler --save

# Yarn
yarn add laravel-bundler
```

## Usage
Create a `webpack.config.js` file on your project root
```js
module.exports = require('laravel-bundler')({
  entry: {
    'app': './resources/js/app.js',
  },
});
```
Update your `package.json`
```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "watch": "npm run dev -- --watch",
    "prod": "cross-env NODE_ENV=production webpack --progress --mode production",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --hot --progress"
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

### TODO
* Documentation

### Not in plan
These feature are not in the plan but can be enabled on demand
* OS Notification
* Image compression
* BrowserSync 
* Copy files and folder
* CSS Preprocessors other than `sass|scss`
* Non webpack methods like `minify|combine|babel|standaloneSass` etc
* Babel plugins

## License
[MIT](LICENSE.txt) License
