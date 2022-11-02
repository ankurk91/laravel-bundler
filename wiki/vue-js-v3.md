## Vue.js v3.x

* Install required dependencies

```bash
npm install vue@^3.0 vue-loader@^17
```

* Update your `webpack.config.js` like:

```js
import webpack from 'webpack';
import {createConfig} from 'laravel-bundler';
import vue3Recipe from 'laravel-bundler/src/recipes/vue-3.js';

export default createConfig({
        entry: {
            app: './resources/js/index.js',
        }
    },
    vue3Recipe,
);
```

#### Notes

* Your styles from `*.vue` SFC will be extracted and merged with the main `app.css`.
* You can use CSS or SCSS within Vue SFC, if you want other pre-processor support; you need to configure them manually.
