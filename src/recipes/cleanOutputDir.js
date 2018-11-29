const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new CleanWebpackPlugin(
      [
        './public/js',
        './public/css',
        './public/fonts',
        './public/images',
        './public/mix-manifest.json',
      ],
      {
        root: process.cwd(),
        verbose: true,
      }
    ),
  ]
};
