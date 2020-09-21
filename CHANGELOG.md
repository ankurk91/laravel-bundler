# Changelog

## Unreleased (0.20.0)
* :warning: Vue.js support is no longer enabled by default. Read [here](./docs/vue-js-v2.md)
* chore: `vue-loader` is no longer bundled, you need to install it manually.
* chore: upgrade PostCSS related deps
* docs: moved docs inside the repo instead of wiki.
* Drop node.js v10.x support

## [0.19.0](https://github.com/ankurk91/laravel-bundler/compare/0.18.0..0.19.0)
* Upgrade packages

## [0.18.0](https://github.com/ankurk91/laravel-bundler/compare/0.17.0..0.18.0)
* Upgrade packages

## [0.17.0](https://github.com/ankurk91/laravel-bundler/compare/0.16.0..0.17.0)
* Upgrade `webpack-merge` to v5
* Upgrade `sass-loader` to v9

## [0.16.0](https://github.com/ankurk91/laravel-bundler/compare/0.15.1..0.16.0)
* Add: `vue@3` support (opt-in)
* Fix: `OptimizeCssAssetsPlugin` position in stack
* Chore: bump dependencies, test on node.js v14.x

## [0.15.1](https://github.com/ankurk91/laravel-bundler/compare/0.15.0..0.15.1)
* Fix: `ReloadOnBladeChange` was broken on node.js 10.x

## [0.15.0](https://github.com/ankurk91/laravel-bundler/compare/0.14.3..0.15.0)
* Add: Auto reload browser on blade file change (opt-in plugin) :rocket:
* Add: TypeScript recipe (opt-in)

## [0.14.3](https://github.com/ankurk91/laravel-bundler/compare/0.14.2..0.14.3)
* Fix: vendor.js was not being extracted on Windows OS

## [0.14.2](https://github.com/ankurk91/laravel-bundler/compare/0.14.1..0.14.2)
* Fix: `mix-manifest.json` was not being generated due to breaking change in a dependency

## [0.14.1](https://github.com/ankurk91/laravel-bundler/compare/0.14.1..0.14.1)
* Fix: source-maps were broken on hmr mode

## [0.14.0](https://github.com/ankurk91/laravel-bundler/compare/0.13.1..0.14.0)
* Remove the need of `css-hot-loader`, utilize `mini-css-extract-plugin` features
* Add `webpack-fix-style-only-entries` plugin

## [0.13.1](https://github.com/ankurk91/laravel-bundler/compare/0.13.0..0.13.1)
* Fix: source map generation in `dev` mode

## [0.13.0](https://github.com/ankurk91/laravel-bundler/compare/0.12.0..0.13.0)
* Internal changes

## [0.12.0](https://github.com/ankurk91/laravel-bundler/compare/0.11.0..0.12.0)
* Upgrade `cross-env` package
* Add `case-sensitive-paths-webpack-plugin`

## [0.11.0](https://github.com/ankurk91/laravel-bundler/compare/0.10.0..0.11.0)
* Upgrade `sass-loader` to v8
* Upgrade `fibers` to v4
* Bump min node.js requirement to v10.13

## [0.10.0](https://github.com/ankurk91/laravel-bundler/compare/0.9.0..0.10.0)
* Remove Purge CSS recipe
* Fix loading environment variable from .env

## [0.9.0](https://github.com/ankurk91/laravel-bundler/compare/0.8.0..0.9.0)
* `Helpers.isDev()` only return `true` when `npm run dev`
* Upgrade `clean-webpack-plugin` to v2.x
* Generate full source map (separate file) in `dev` mode while `watch` and `hot` behaviour remains same as before. 

## [0.8.0](https://github.com/ankurk91/laravel-bundler/compare/0.7.5...0.8.0)
* `@` alias now points to `resources` rather than `resources/js`
* Remove default browsers target from `autoprefixer` and `babel-preset-env`; in favour of single  [browserslist](https://github.com/browserslist/browserslist) file
    - Create a  `.browserslistrc` file on your project root and specify the supported browsers there.

## [0.7.5](https://github.com/ankurk91/laravel-bundler/compare/0.7.4...0.7.5)
* Change development source map to `eval-source-map`
* Clean build files just before emitting new

## [0.7.4](https://github.com/ankurk91/laravel-bundler/compare/0.7.3...0.7.4)
* Allow using `autoprefixer` in development

## [0.7.3](https://github.com/ankurk91/laravel-bundler/compare/0.7.2...0.7.3)
* Allow overriding postcss configs
* Better detection of babel configs
* Update Default browsers list to `['> 1%', 'not IE 11']`

## [0.7.2](https://github.com/ankurk91/laravel-bundler/compare/0.7.1...0.7.2)
* Add [CSS modules](https://vue-loader.vuejs.org/guide/css-modules.html#usage) support
* Fix `Invalid Host/Origin Header` error in `hot` mode

## [0.7.1](https://github.com/ankurk91/laravel-bundler/compare/0.7.0...0.7.1)
* Enable `terser` webpack plugin cache 
* Enable `babel-loader` cache

## [0.7.0](https://github.com/ankurk91/laravel-bundler/compare/0.6.1...0.7.0)
* `vue-template-compiler` is a dev dependencies now, you should install this in your project manually in order to add support for Vue.js
