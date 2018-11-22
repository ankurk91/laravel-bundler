// Extract vendors
// https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693

module.exports = {
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendorScripts: {
          test: /node_modules\/(.*)\.js/,
          name: 'vendor',
          chunks: 'all',//initial, async or all
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
