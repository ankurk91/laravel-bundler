## PostCSS

[PostCSS](https://github.com/postcss/postcss) loader is already configured with [postcss-preset-env](https://github.com/csstools/postcss-preset-env)

In order to override default configuration; you can create your own PostCSS config file on project root. 
File name can be one of `.postcssrc`, `.postcssrc.json`, `.postcssrc.js` or, `postcss.config.js`

The example config looks like this - `postcss.config.js`
```js
module.exports = {
  plugins: [
    'postcss-preset-env',
  ]
}
```

Laravel bundler will skip its default config and should pick right configuration automatically.
