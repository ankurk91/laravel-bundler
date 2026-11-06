## Babel

Babel loader with `@babel/preset-env` is already configured for you.

Create a `babel.config.js` file on your project root like:

```js
export default {
    // Omit this if you are using a `.browserslistrc` file
    // targets: ['> 2%', 'not dead'],
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
            }
        ]
    ],
    plugins: [
        // Your babel plugins
    ],
}
```

You should remove the `babel` property from your `package.json` now.

* [Read more](https://babeljs.io/docs/en/config-files)
