import path from 'path';
import getPort, {portNumbers} from 'get-port';
import HMRDetectPlugin from '../plugins/HMRDetectPlugin.js';
import Helpers from '../helpers.js';

const port = await getPort({
  port: portNumbers(8080, 9000),
  exclude: [80, 443, 3306, 5432, 6379],
  host: 'localhost',
});

const config = {
  output: {},
  devServer: {
    allowedHosts: 'all',
    host: 'localhost',
    port: port,
    client: {
      logging: 'warn',
      overlay: {
        warnings: false,
        errors: false,
        runtimeErrors: false,
      },
    },
    open: false,
    static: path.resolve(process.cwd(), 'public'),
    devMiddleware: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization'
      },
      publicPath: `//localhost:${port}/`,
    },
    compress: false,
    liveReload: true,
    watchFiles: {
      paths: [
        path.resolve(process.cwd(), 'resources/views/**/*.blade.php')
      ]
    },
    setupExitSignals: true,
  },
  plugins: [
    new HMRDetectPlugin()
  ]
};

if (Helpers.isHmr()) {
  // This is required to make HMR work,
  // specially when main application is running on a different domain than dev server
  config.output.publicPath = config.devServer.devMiddleware.publicPath;
}

export default config;
