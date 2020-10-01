## PostCSS

[PostCSS](https://github.com/postcss/postcss) loader is already configured with `autoprefixer` and `cssnano`.

In order to override default configuration; you can create your own PostCSS config file on project root. 
File name can be one of `.postcssrc`, `.postcssrc.json`, `.postcssrc.js`, `postcss.config.js`

The example config looks like this - `postcss.config.js`
```js
module.exports = {
  plugins: [
    require('autoprefixer')({
      // browsers: ['> 2%', 'not dead']
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        }]
    })
  ]
}
```
Laravel bundler will skip its default config and should pick right configuration automatically.
