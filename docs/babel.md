## Babel

Babel loader with `@babel/preset-env` is already configured for you.

In order to override default configuration; you can create your own config file on project root.
File name can be one of `.babelrc`, `.babelrc.js`, `babel.config.js`

Here is the example `babel.config.js` file:
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: false,       
        useBuiltIns: false,
        targets: {
          // https://browserl.ist
          // browsers: ['> 2%', 'not dead']
        }
      }
    ]
  ],
  plugins: [],
}
```

Laravel-Bundler will skip its default config and should pick right configuration automatically.
