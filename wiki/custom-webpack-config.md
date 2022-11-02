## Custom webpack configs

Laravel-Bundler is using [webpack-merge](https://github.com/survivejs/webpack-merge) to merge various configurations.

You can supply any valid configuration, see available webpack [configs](https://webpack.js.org/configuration/).

Here is the example `webpack.config.js` file:

```js
import webpack from 'webpack';
import {createConfig} from 'laravel-bundler';

export default createConfig({
        entry: {
            app: './resources/js/app.js',
        },
        output: {},
        plugins: [
            // Your webpack plugins
        ],
        module: {
            rules: []
        },
    },
);
```
