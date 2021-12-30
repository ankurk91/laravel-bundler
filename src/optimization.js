const Helpers = require("./helpers.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const browserslistToEsbuild = require('browserslist-to-esbuild');

module.exports = {
  minimize: Helpers.isProduction(),
  minimizer: [
    new TerserPlugin({
      minify: TerserPlugin.esbuildMinify,
      terserOptions: {
        legalComments: 'none',
        target: browserslistToEsbuild(),
        drop: ['debugger', 'console'],
      }
    }),
    new CssMinimizerPlugin({
      minify: CssMinimizerPlugin.esbuildMinify,
      minimizerOptions: {
        legalComments: 'none',
        target: browserslistToEsbuild(),
      },
      warningsFilter: (warning, file, source) => {
        if (/@charset/i.test(warning?.message)) {
          return false;
        }

        return true;
      },
    }),
  ]
}
