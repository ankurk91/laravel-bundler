# Changelog

## [2.6.0](https://github.com/ankurk91/laravel-bundler/compare/2.5.0..2.6.0)

* Upgrade dotend-expand to v11.x

## [2.5.0](https://github.com/ankurk91/laravel-bundler/compare/2.4.3..2.5.0)

* Upgrade many package

## [2.4.3](https://github.com/ankurk91/laravel-bundler/compare/2.4.2..2.4.3)

* Update `esbuild` to v 0.19.x

## [2.4.2](https://github.com/ankurk91/laravel-bundler/compare/2.4.1..2.4.2)

* Use `sass` instead of `sass-embedded`

## [2.4.1](https://github.com/ankurk91/laravel-bundler/compare/2.4.0..2.4.1)

* Allow `esbuild` v0.18.x

## [2.4.0](https://github.com/ankurk91/laravel-bundler/compare/2.3.0..2.4.0)

* Remove reactivity transform from vue 3 recipe
* Set vue compat config `MODE` to 2 as per official migration guide

## [2.3.0](https://github.com/ankurk91/laravel-bundler/compare/2.2.0..2.3.0)

* Upgrade `css-minimizer-webpack-plugin` to v5.x

## [2.2.0](https://github.com/ankurk91/laravel-bundler/compare/2.1.0..2.2.0)

* Upgrade `esbuild` to 0.17.x
* Upgrade `dotenv-expand` to 10.x

## [2.1.0](https://github.com/ankurk91/laravel-bundler/compare/2.0.0..2.1.0)

* Upgrade `esbuild` to 0.16.x

## [2.0.0](https://github.com/ankurk91/laravel-bundler/compare/1.1.0..2.0.0)

* Upgrade `webpack-cli` package to v5.x

## [1.1.0](https://github.com/ankurk91/laravel-bundler/compare/1.1.0..1.0.0)

* Add automatic port selection for dev server

## [1.0.0](https://github.com/ankurk91/laravel-bundler/compare/0.41.0..1.0.0)

* Convert to Pure ESM package
* Drop node v14 support
* Upgrade `babel-loader` to v9

## [0.41.0](https://github.com/ankurk91/laravel-bundler/compare/0.39.0..0.40.1)

* Add `@vue/compat` recipe

## [0.39.0](https://github.com/ankurk91/laravel-bundler/compare/0.38.1..0.39.0)

* :warning: Force to have `.vue` extension while importing Vue components
* Remove `@vendor` alias

## [0.38.1](https://github.com/ankurk91/laravel-bundler/compare/0.37.1..0.38.1)

* Perf: use `sass-embedded` instead of `sass`

## [0.37.1](https://github.com/ankurk91/laravel-bundler/compare/0.37.0..0.37.1)

* Fix: file hash issue

## [0.37.0](https://github.com/ankurk91/laravel-bundler/compare/0.36.0..0.37.0)

* Add a recipe to fix the sourcemap generation for `*.vue` files (opt-in)
* Add helper method to generate sourcemap in production

## [0.36.0](https://github.com/ankurk91/laravel-bundler/compare/0.35.2..0.36.0)

* Upgrade [dotenv](https://github.com/motdotla/dotenv) package to v16

## [0.35.2](https://github.com/ankurk91/laravel-bundler/compare/0.35.1..0.35.2)

* Upgrade [dotenv](https://github.com/motdotla/dotenv) package to v14.x

## [0.35.1](https://github.com/ankurk91/laravel-bundler/compare/0.35.0..0.35.1)

* Upgrade deps to use `drop` feature in esbuild minification

## [0.35.0](https://github.com/ankurk91/laravel-bundler/compare/0.33.1..0.35.0)

* Use [es-build](https://esbuild.github.io/) to minify CSS and JS

## [0.33.1](https://github.com/ankurk91/laravel-bundler/compare/0.32.1..0.33.1)

* Update `css-loader` to v6

## [0.32.1](https://github.com/ankurk91/laravel-bundler/compare/0.32.0..0.32.1)

* Update `webpack-dev-server` to v4 stable

## [0.32.0](https://github.com/ankurk91/laravel-bundler/compare/0.31.3..0.32.0)

* Fix: dynamic import support
* Perf: don't process css file with sass loader

## [0.31.2](https://github.com/ankurk91/laravel-bundler/compare/0.30.3..0.31.2)

* :warning: Output path has been changed from `./public` to `./public/dist`
* :warning: `babel-loader` no longer have default configs, you need to define your own
* Upgrade `webpack-dev-server`
* Tweak `babel-loader` and `terser` options

## [0.30.0](https://github.com/ankurk91/laravel-bundler/compare/0.29.3..0.30.0)

* :warning: Remove persistence Cache recipe, as it is buggy in cache invalidation
* Upgrade `mini-css-extract-plugin` to v2.0

## [0.29.3](https://github.com/ankurk91/laravel-bundler/compare/0.29.2..0.29.3)

* Fix: in-correct webpack mode
* Upgrade post-css loader

## [0.29.2](https://github.com/ankurk91/laravel-bundler/compare/0.29.1..0.29.2)

* Remove [fibers](https://github.com/laverdet/node-fibers) package
* Replace `minimist` with `yargs-parser` package

## [0.29.0](https://github.com/ankurk91/laravel-bundler/compare/0.28.0..0.29.1)

* Bump minimum node.js version requirement to v14.15.0

## [0.28.0](https://github.com/ankurk91/laravel-bundler/compare/0.27.0..0.28.0)

* :warning: Remove `postcss-preset-env`, and just use `autoprefixer`
* Upgrade `css-minimizer-webpack-plugin`, `cssnano` and `postcss` to latest

## [0.27.0](https://github.com/ankurk91/laravel-bundler/compare/0.26.0..0.27.0)

* Upgrade `webpack-dev-server` to v4.0.0-beta.3
* Upgrade `dotenv` to v9

## [0.26.0](https://github.com/ankurk91/laravel-bundler/compare/0.25.0..0.26.0)

* Downgrade `css-minimizer-webpack-plugin`, `cssnano` and `postcss` until compatible with `postcss-preset-env`

## [0.25.0](https://github.com/ankurk91/laravel-bundler/compare/0.24.0..0.25.0)

* Removed `ReloadOnBladeChange` plugin, since this feature is baked in into `webpack-dev-server` now
* Upgrade `cssnano` to v5

## [0.24.0](https://github.com/ankurk91/laravel-bundler/compare/0.23.0..0.24.0)

* Upgrade `sass-loader` to v11
* Upgrade `webpack-dev-server` to v4.0.0-beta.1

## [0.23.0](https://github.com/ankurk91/laravel-bundler/compare/0.22.1..0.23.0)

* Disable persistent cache feature, you have to opt-in manually from now.
* Update docs `scripts` section to use new `webpack-cli` flags

## [0.22.1](https://github.com/ankurk91/laravel-bundler/compare/0.22.0..0.22.1)

* Bring back `webpack-remove-empty-scripts`

## [0.22.0](https://github.com/ankurk91/laravel-bundler/compare/0.20.0..0.22.0)

* Upgrade to Webpack v5
* Drop CSS modules support
* Remove `webpack-fix-style-only-entries` plugin until it gets support for Webpack v5
* Remove OS Notification recipe
* Remove the need of `cross-env` package
* Use `postcss-preset-env` in `postcss-loader`
* Replace unsupported `optimize-css-assets-plugin` with better `css-minimizer-plugin`
* Enable persistent cache, [details](https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md)
* Read the upgrade [guide](./UPGRADING.md) to migrate

## [0.20.0](https://github.com/ankurk91/laravel-bundler/compare/0.19.0..0.20.0)

* :warning: Vue.js support is no longer enabled by default. Read [here](./wiki/vue-js-v2.md)
* chore: `vue-loader` is no longer bundled, you need to install it manually.
* chore: upgrade PostCSS related deps
* docs: move docs inside the repo instead of maintaining the wiki.
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
* Remove default browsers target from `autoprefixer` and `babel-preset-env`; in favour of
  single  [browserslist](https://github.com/browserslist/browserslist) file
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

* `vue-template-compiler` is a dev dependencies now, you should install this in your project manually in order to add
  support for Vue.js
