const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');

// You must install `vue@^3.0`, `@vue/compiler-sfc@^3.0` and 'vue-loader@^17` in your project

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: require.resolve('vue-loader'),
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
    extensions: ['.vue']
  }
};
