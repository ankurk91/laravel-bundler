const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

// You should install `vue` in your app in order to use this recipe

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.vue']
  }
};
