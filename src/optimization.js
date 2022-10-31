import Helpers from "./helpers.js";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default {
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
