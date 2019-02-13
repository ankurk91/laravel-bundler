# Changelog

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
