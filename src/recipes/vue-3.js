import webpack from 'webpack';
import {VueLoaderPlugin} from 'vue-loader';
// You must install `vue@^3.0`, `@vue/compiler-sfc@^3.0` and 'vue-loader@^17` in your project

export default {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            whitespace: 'condense'
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm-bundler.js', 'default'],
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  }
};
