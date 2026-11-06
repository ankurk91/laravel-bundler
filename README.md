# Asset Bundler for Laravel

[![downloads](https://badgen.net/npm/dt/laravel-bundler)](https://npm-stat.com/charts.html?package=laravel-bundler&from=2018-11-01)
[![npm-version](https://badgen.net/npm/v/laravel-bundler)](https://www.npmjs.com/package/laravel-bundler)
[![github-tag](https://badgen.net/github/tag/ankurk91/laravel-bundler)](https://github.com/ankurk91/laravel-bundler/tags)
[![license](https://badgen.net/github/license/ankurk91/laravel-bundler)](LICENSE.txt)
[![package size](https://img.shields.io/npm/unpacked-size/laravel-bundler)](https://pkg-size.dev/laravel-bundler)
[![tests](https://github.com/ankurk91/laravel-bundler/workflows/tests/badge.svg)](https://github.com/ankurk91/laravel-bundler/actions)

Modern and fast asset building tool for Laravel framework with better defaults.

A pre-configured [webpack 5](https://webpack.js.org/) setup that replaces
[laravel-mix](https://github.com/laravel-mix/laravel-mix). It writes a `mix-manifest.json`, so Laravel's
`mix()` helper keeps working without any PHP changes.

## Requirements

| Requirement | Version                                   |
|-------------|-------------------------------------------|
| Node.js     | `^22.18.0 \|\| >=24.11.0`                 |
| Module type | ESM only (`"type": "module"`)             |
| Laravel     | Any version that ships the `mix()` helper |

:bulb: This package does not work alongside `laravel-mix`; remove `laravel-mix` and `webpack.mix.js` first.

## Installation

```bash
npm uninstall laravel-mix
npm install --save-dev laravel-bundler@^4
```

## Setup

### 1. `webpack.config.mjs` (project root)

```js
import {createConfig} from 'laravel-bundler';
import vue3Recipe from 'laravel-bundler/src/recipes/vue-3.js';

export default createConfig({
        entry: {
            app: './resources/js/app.js',
        },
        plugins: [
            //
        ],
        // Any other webpack config goes here, it will be deep-merged
    },
    // Optional recipes, see the list below
    vue3Recipe,
);
```

### 2. `package.json`

```json
{
    "type": "module",
    "scripts": {
        "dev": "webpack --config-node-env=development --progress",
        "watch": "webpack watch --config-node-env=development --progress",
        "hot": "webpack serve --config-node-env=development --progress --hot",
        "prod": "webpack --config-node-env=production --progress"
    },
    "browserslist": [
        "> 2%",
        "not dead"
    ]
}
```

### 3. `babel.config.js` (project root)

JavaScript goes through `babel-loader` (Babel 8), but **no Babel config is shipped**. Without this file your code is
bundled as-is, without any transpiling. Targets are read from `browserslist`.

```js
export default {
    presets: [
        ['@babel/preset-env', {modules: false}]
    ],
    plugins: [],
}
```

### 4. `resources/js/app.js`

```js
import {createApp, defineAsyncComponent} from 'vue';
import './../scss/app.scss';
import RegularComponent from './Regular.vue';

const app = createApp({});
app.component('regular-component', RegularComponent);
// Lazy loaded, emitted as a separate chunk
app.component('lazy-component', defineAsyncComponent(() => import('./HeavyComponent.vue')));
app.mount('#app');
```

### 5. Blade layout

```blade
<!-- head -->
<link href="{{ mix('css/app.css', 'dist') }}" rel="stylesheet">

<!-- before </body>, keep this order -->
<script src="{{ mix('js/manifest.js', 'dist') }}"></script>
<script src="{{ mix('js/vendor.js', 'dist') }}"></script>
<script src="{{ mix('js/app.js', 'dist') }}"></script>
```

### 6. `.gitignore`

```.gitignore
/public/dist
```

## Commands

| Command         | Mode        | Output hashed | Source maps    | Notes                                                   |
|-----------------|-------------|---------------|----------------|---------------------------------------------------------|
| `npm run dev`   | development | yes           | separate files |                                                         |
| `npm run watch` | development | no            | inline (eval)  | Rebuilds on change                                      |
| `npm run hot`   | development | no            | inline (eval)  | HMR dev server, see below                               |
| `npm run prod`  | production  | yes           | none           | Minified with esbuild, drops `console.*` and `debugger` |

## Output

Everything is written to `public/dist/`, which is **emptied on every build**.

```
public/dist/
├── mix-manifest.json        # read by Laravel's mix() helper (not written in hot mode)
├── hot                      # only while `npm run hot` is running
├── css/[entry]-[hash].css   # all CSS of an entry, including <style> from .vue files
├── js/manifest-[hash].js    # webpack runtime
├── js/vendor-[hash].js      # all JS from node_modules imported by entries
├── js/[entry]-[hash].js     # your code
├── js/chunks/[name]-[hash].js  # dynamic import() chunks
├── images/[folder]/[name]-[hash].[ext]
└── fonts/[folder]/[name]-[hash].[ext]
```

## What is pre-configured

These are always enabled; you don't need to add them.

| Area              | Behaviour                                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|
| JavaScript        | `babel-loader` for `.js`/`.jsx` outside `node_modules`, with cache enabled                                            |
| CSS               | `.css` files through `css-loader` + `postcss-loader` (with `autoprefixer`), extracted to a file                       |
| Sass              | `.scss`/`.sass` through `sass-loader` (modern Sass API); `$env` holds `development` or `production` in the entry file |
| PostCSS           | `autoprefixer` by default; a `postcss.config.cjs` in your project replaces it                                         |
| Images            | `webp`, `png`, `jpg`, `gif`, `ico`, and `svg` not in a `font*` path → `images/`                                       |
| Fonts             | `woff`, `woff2`, `ttf`, `eot`, `otf`, and `svg` in a `font*` path → `fonts/`                                          |
| Minification      | JS and CSS minified with [esbuild](https://esbuild.github.io/), target taken from `browserslist`                      |
| Vendor extraction | JS from `node_modules` → `vendor.js`; webpack runtime → `manifest.js`                                                 |
| Manifest          | `mix-manifest.json` compatible with Laravel's `mix()` helper                                                          |
| Env variables     | Variables in `.env` prefixed with `MIX_` are available as `process.env.MIX_*`; `${VAR}` expansion is supported        |
| Dev server        | Port picked automatically from `8080`–`9000`, CORS enabled, live reload on `resources/views/**/*.blade.php` changes   |
| HMR               | Writes `public/dist/hot` while running so Laravel's `mix()` serves assets from the dev server                         |
| Entries           | A `.css`/`.scss` file can be an entry; the empty JS file is not emitted                                               |
| Safety            | Case-sensitive import paths enforced (avoids Linux vs macOS/Windows build differences)                                |

## Recipes

Recipes are optional webpack config fragments. Pass them as extra arguments to `createConfig()`.

| Recipe          | Import path                                     | Purpose                                                    | Install in your project                | Docs                         |
|-----------------|-------------------------------------------------|------------------------------------------------------------|----------------------------------------|------------------------------|
| Vue 3           | `laravel-bundler/src/recipes/vue-3.js`          | `.vue` single file components                              | `vue@^3 vue-loader@^17`                | [wiki](./wiki/vue-js-v3.md)  |
| Vue 3 compat    | `laravel-bundler/src/recipes/vue-3-compat.js`   | Migrating from Vue 2 with `@vue/compat`                    | `vue@^3 @vue/compat@^3 vue-loader@^17` |                              |
| Vue 2           | `laravel-bundler/src/recipes/vue-2.js`          | Legacy Vue 2.7 apps                                        | `vue@^2.7 vue-loader@^15.10`           | [wiki](./wiki/vue-js-v2.md)  |
| Vue source maps | `laravel-bundler/src/recipes/vue-source-map.js` | Clean `.vue` file paths in browser devtools                | –                                      |                              |
| TypeScript      | `laravel-bundler/src/recipes/typescript.js`     | `.ts`/`.tsx` via `ts-loader`                               | `typescript ts-loader`                 | [wiki](./wiki/typescript.md) |
| jQuery          | `laravel-bundler/src/recipes/jquery.js`         | Global `$`/`jQuery` using the slim build                   | `jquery@^3`                            |                              |
| Alias           | `laravel-bundler/src/recipes/alias.js`          | `@` resolves to `resources/` (`import x from '@/js/x.js'`) | –                                      |                              |

Example with multiple recipes:

```js
import {createConfig} from 'laravel-bundler';
import vue3Recipe from 'laravel-bundler/src/recipes/vue-3.js';
import aliasRecipe from 'laravel-bundler/src/recipes/alias.js';

export default createConfig({entry: {app: './resources/js/app.js'}}, vue3Recipe, aliasRecipe);
```

## API

### `createConfig(...configs)`

```js
import {createConfig} from 'laravel-bundler';
```

* Accepts any number of webpack config objects.
* Merges them with [webpack-merge](https://github.com/survivejs/webpack-merge) on top of the defaults; later arguments
  win, arrays (`plugins`, `module.rules`) are appended.
* Returns a function `(env, argv) => config`, which webpack-cli accepts as a config export.
* Any [webpack option](https://webpack.js.org/configuration/) can be passed,
  see [custom config](./wiki/custom-webpack-config.md).

### Helpers

```js
import Helpers from 'laravel-bundler/src/helpers.js';
```

| Method                             | Returns                                                                                                           |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `Helpers.nodeEnv()`                | `'development'` or `'production'`                                                                                 |
| `Helpers.isProduction()`           | `true` for `npm run prod`                                                                                         |
| `Helpers.isDev()`                  | `true` for `dev`, `watch` and `hot`                                                                               |
| `Helpers.isWatch()`                | `true` for `npm run watch`                                                                                        |
| `Helpers.isHmr()`                  | `true` for `npm run hot`                                                                                          |
| `Helpers.sourceMapsInProduction()` | A `devtool` value that also emits source maps in production; use as `{devtool: Helpers.sourceMapsInProduction()}` |

## Common tasks

<details>
<summary>Add a separate CSS entry</summary>

```js
export default createConfig({
    entry: {
        app: './resources/js/app.js',
        admin: './resources/scss/admin.scss', // emits css/admin.css only
    },
});
```

</details>

<details>
<summary>Run the HMR dev server over HTTPS</summary>

Generate certificates with [mkcert](https://github.com/FiloSottile/mkcert), then add a script:

```json
{
    "scripts": {
        "hot:https": "npm run hot -- --server-type https --server-options-cert ./storage/localhost.pem --server-options-key ./storage/localhost-key.pem"
    }
}
```

See [HTTPS on local](./wiki/https-on-local.md).

</details>

<details>
<summary>Serve assets from a CDN</summary>

See [CDN](./wiki/cdn.md).

</details>

## Notes for AI agents

* **Config file:** `webpack.config.mjs` (or `.js` with `"type": "module"`) in the project root; always wrap the config
  with
  `createConfig()` instead of exporting a plain object, otherwise all defaults are lost.
* **ESM only:** use `import`/`export`; `require()` is not available in config files or app code.
* **Recipe imports must include the `.js` extension:** `laravel-bundler/src/recipes/vue-3.js`.
* **Vue imports must include the `.vue` extension:** `import Foo from './Foo.vue'`.
* **Do not** install or configure `laravel-mix`, `webpack.mix.js`, `cross-env`, `css-loader`, `sass-loader`,
  `postcss-loader`, `babel-loader`, `mini-css-extract-plugin` or `esbuild`; they are already dependencies.
* **Do** install the packages listed for a recipe in the [recipes](#recipes) table; `sass` is already included.
* **Babel config** (`babel.config.js`) is not shipped; without it JS is not transpiled. It must be Babel 8 compatible
  (no `loose`/`spec`/`useBuiltIns` on `@babel/preset-env`).
* **Build targets** come from `browserslist` (`package.json` key or `.browserslistrc`), used by both Babel and esbuild.
* **Only `MIX_*` env vars** from `.env` are exposed to frontend code via `process.env.MIX_*`.
* **Blade:** use `mix('path', 'dist')`; the second argument `'dist'` is required because output goes to `public/dist`.
* **Verify a change** with `npm run dev` (fast) or `npm run prod` (minified); both exit non-zero on errors.
* **Upgrading:** read [UPGRADING.md](./UPGRADING.md) and [CHANGELOG.md](./CHANGELOG.md).

## Documentation

* [Additional docs](./wiki)
* [Upgrade guide](./UPGRADING.md)
* [Changelog](./CHANGELOG.md)

## Not in the plan

These are not built in but can be added with your own webpack plugins:

* [Build notification](https://github.com/RoccoC/webpack-build-notifier)
* [Copy files and folders](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Image compression](https://github.com/webpack-contrib/image-minimizer-webpack-plugin)
* CSS preprocessors other than `sass`/`scss`

## License

[MIT](LICENSE.txt) License
