// https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
// https://webpack.js.org/plugins/split-chunks-plugin

module.exports = {
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        default: false,
        vendors: false,

        vendorScripts: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          name: 'vendor',
          chunks: 'all',//initial, async or all
          enforce: true,
          priority: 20
        },

        /*vendorStyles: {
          name: 'vendor',
          test: /(node_modules).*(.*(\.css|\.s?[ac]ss|))$/,
          chunks: 'all',
          enforce: true
        }*/
      }
    },
  }
};
