# Upgrading

### From 3.x to v4.0.0

* Node.js `^22.18.0 || >=24.11.0` is required now.
* Babel has been upgraded to v8, follow the [migration guide](https://babeljs.io/docs/v8-migration)
    * Upgrade any Babel plugins/presets used in your project to v8 compatible versions
    * Define a `.browserslistrc` file or a top-level `targets` option in your `babel.config.js`,
      otherwise Babel defaults to `"defaults"` query
    * Remove `loose` and `spec` options from `@babel/preset-env`, use [assumptions](https://babeljs.io/docs/assumptions)
      instead
* `sass-loader` no longer uses the legacy Sass JS API, check your `sass-loader` options if you have overridden them.
* `webpack-dev-server` has been upgraded to v6, check the
  [changelog](https://github.com/webpack/webpack-dev-server/blob/main/CHANGELOG.md) if you have customized `devServer`
  options (e.g. `proxy.bypass`, `sockjs`, `spdy` have been removed)

### From 2.9.x to v3.0.0

* Update your `package.json` file's scripts section and replace
`--define-process-env-node-env` flag with `--config-node-env`

### From 1.1.0 to v2.0.0

* Replace `--node-env` with `--define-process-env-node-env` in your `package.json` scripts

### From 0.40.0 to v1.0.0

* This package is a Pure ESM now.
* Update your `package.json` as per [README](./README.md)
* Update your `webpack.config.js` as per [README](./README.md)
* You can no longer use `require(file)` in your codebase, you have to use `import/export`
* [Read more](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) about Pure ESM packages

### From 0.38.1 to 0.39.0

* You must add `.vue` extension to while importing vue components

```diff
- import './Components/Login';
+ import './Components/Login.vue';
```

### From 0.30.0 to 0.31.2

* Update your `.gitignore` file like:

```diff
- /public/hot
- /public/js/
- /public/css/
- /public/fonts/
- /public/images/
- /public/mix-manifest.json
+ /public/dist
```

* Update your blade templates to have second argument supplied to `mix()` function

```diff
- <script src="{{ mix('js/app.js') }}"></script>
+ <script src="{{ mix('js/app.js', 'dist') }}"></script>
```

* Add babel config in your `package.json`, since there is no default config

```json
{
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

### From 0.20.0 to 0.21.0

* Update your `package.json` scripts as described in [README.md](./README.md)
