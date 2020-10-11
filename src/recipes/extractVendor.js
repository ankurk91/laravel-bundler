module.exports = {
  optimization: {
    moduleIds: 'deterministic',
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
