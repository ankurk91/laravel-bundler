const webpack = require('webpack');

// jQuery 3.x
// Force slim build

const jQueryPath = 'jquery/dist/jquery.slim.js';

module.exports = {
  resolve: {
    alias: {
      'jquery$': jQueryPath,
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: jQueryPath,
      jQuery: jQueryPath,
      'window.jQuery': jQueryPath,
    }),
  ]
};
