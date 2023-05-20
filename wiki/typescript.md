### TypeScript

* Install required dependencies

```bash
npm install ts-loader typescript@^5
```

* Generate an initial [ts-config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file in your project
  root

```bash
./node_modules/.bin/tsc --init
```

* Update your `webpack.config.js` file like:

```js
import webpack from 'webpack';
import {createConfig} from 'laravel-bundler';
import tsRecipe from 'laravel-bundler/src/recipes/typescript.js';

export default createConfig({
        entry: {
            app: './resources/js/index.ts',
        }
    },
    tsRecipe,
);
```

#### Notes

* Use [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) to reduce build
  time
