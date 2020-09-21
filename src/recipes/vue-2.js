const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');

// You must install `vue@^2.0`, `vue-template-compiler@^2` and 'vue-loader@^15` in your project

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: require.resolve('vue-loader'),
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            preserveWhitespace: false, //Deprecated
            whitespace: 'condense',
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
