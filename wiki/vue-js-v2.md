## Vue.js v2.7+

* Install required dependencies

```bash
npm install vue@^2.7 vue-loader@^15.10
```

* Update your `webpack.config.js` like:

```js
import webpack from 'webpack';
import {createConfig} from 'laravel-bundler';
import vue2Recipe from 'laravel-bundler/src/recipes/vue-2.js';

export default createConfig({
        entry: {
            app: './resources/js/index.js',
        }
    },
    vue2Recipe,
);
```

#### Notes

* Your styles from `*.vue` SFC will be extracted and merged with the main `app.css`.
* You can use CSS or SCSS within Vue SFC, if you want other pre-processor support; you need to configure them manually.
