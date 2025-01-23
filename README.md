# Asset Bundler for Laravel

[![downloads](https://badgen.net/npm/dt/laravel-bundler)](https://npm-stat.com/charts.html?package=laravel-bundler&from=2018-11-01)
[![npm-version](https://badgen.net/npm/v/laravel-bundler)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://badgen.net/github/tag/ankurk91/laravel-bundler)](https://github.com/ankurk91/laravel-bundler/tags)
[![license](https://badgen.net/github/license/ankurk91/laravel-bundler)](LICENSE.txt)
[![install size](https://packagephobia.com/badge?p=laravel-bundler)](https://packagephobia.com/result?p=laravel-bundler)
[![tests](https://github.com/ankurk91/laravel-bundler/workflows/tests/badge.svg)](https://github.com/ankurk91/laravel-bundler/actions)

Modern and fast asset building tool for Laravel framework with better defaults.

## Installation

:bulb: This package does not work with [laravel-mix](https://github.com/laravel-mix/laravel-mix);
you must remove `laravel-mix` before using this one

```bash
npm install --save-dev laravel-bundler@^2
```

## Usage

Create a `resources/js/app.js` file like

```js
// Example: Vue.js v2 with bootstrap
import Vue from 'vue';
// You can import styles like this
import 'bootstrap/dist/css/bootstrap.css'

import RegularComponent from './Regular.vue'

const LazyLoadedComponent = () => import('./HeavyComponent.vue');

new Vue({
    el: "#app",
    components: {
        RegularComponent,
        LazyLoadedComponent,
    }
});
```

Create a `webpack.config.mjs` file on your project root and remove `webpack.mix.js` if exists.

```js
import webpack from 'webpack'
import {createConfig} from 'laravel-bundler';
import vue2Recipe from 'laravel-bundler/src/recipes/vue-2.js';

export default createConfig({
        entry: {
            app: './resources/js/app.js',
        },
        plugins: [
            //
        ],
        // Other webpack configs may go here
    },
    // Include vue v2 recipe
    // Dont forget to install required packages by this recipe
    vue2Recipe
);
```

Update your `package.json` file

```json
{
    "type": "module",
    "scripts": {
        "dev": "webpack --define-process-env-node-env=development --progress",
        "watch": "webpack watch --define-process-env-node-env=development --progress",
        "hot": "webpack serve --define-process-env-node-env=development --progress --hot",
        "hot:https": "npm run hot -- --https",
        "prod": "webpack --define-process-env-node-env=production --progress"
    },
    "browserslist": [
        "> 2%",
        "not dead"
    ],
    "babel": {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "bugfixes": true
                }
            ]
        ],
        "plugins": []
    }
}
```

Update your blade template

```blade
<!-- header -->
<link href="{{ mix('css/app.css', 'dist') }}" rel="stylesheet">

<!-- footer -->
<script src="{{ mix('js/manifest.js', 'dist') }}"></script>
<script src="{{ mix('js/vendor.js', 'dist') }}"></script>
<script src="{{ mix('js/app.js', 'dist') }}"></script>
```

Update your `.gitignore` file

```.gitignore
/public/dist
```

### Features

* Webpack 5 and Babel 7 with `@babel/preset-env`
* Use [esbuild](https://esbuild.github.io/) to minify CSS and JS :rocket:
* Vue.js v2 support - [Recipe](./wiki/vue-js-v2.md)
* Vue.js v3 support - [Recipe](./wiki/vue-js-v3.md)
* `CSS` and `SASS|SCSS` support
* PostCSS loader pre-configured with `autoprefixer`
* Font and image files handling
* Full HMR support for Vue, even for CSS :fire:
* Extract all css to a separate file (based on entry)
* Accepts css/scss file as entry
* Extract all vendor js to a separate file
* Dynamic import (code splitting) support :mage_man:
* Clean the output directory before emitting the assets
* Generates a `mix-manifest.json` file which is compatible with Laravel's `mix()` helper
* Load environment variables from `.env` file that are prefixed with `MIX_` :wink:
* Intelligent SourceMap based on mode
* Can auto-reload web-browser when blade templates gets changed :wink:

### Documentation

* [Read the additional docs](./wiki)

### Not in the plan

These features are not in the plan but can be enabled on demand :man_shrugging:

* [Build Notification](https://github.com/RoccoC/webpack-build-notifier)
* [Copy files and folder](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Image compression](https://github.com/webpack-contrib/image-minimizer-webpack-plugin)
* CSS Preprocessors other than `sass|scss`

## License

[MIT](LICENSE.txt) License
