const Helpers = require('../helpers');

module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          forceAllTransforms: Helpers.isProduction(),
          targets: {
            browsers: ['> 2%']
          }
        }
      ]
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", {
        "useESModules": true
      }]
    ],
  }
};
