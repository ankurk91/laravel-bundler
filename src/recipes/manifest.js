const { WebpackLaravelMixManifest } = require('webpack-laravel-mix-manifest');

module.exports = {
  plugins:[
    new WebpackLaravelMixManifest(),
  ]
};
