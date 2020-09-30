const { WebpackLaravelMixManifest } = require('webpack-laravel-mix-manifest/dist/cjs/index');

module.exports = {
  plugins:[
    new WebpackLaravelMixManifest(),
  ]
};
