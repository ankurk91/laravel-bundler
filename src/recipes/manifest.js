const ManifestPlugin = require('webpack-laravel-mix-manifest');

module.exports = {
  plugins:[
    new ManifestPlugin({
       fileName: 'mix-manifest.json',
    }),
  ]
};
