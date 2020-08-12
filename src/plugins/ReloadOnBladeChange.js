const chokidar = require('chokidar');
const chalk = require('chalk');
const path = require('path');
const Helpers = require('../helpers.js');

module.exports = class ReloadOnBladeChange {

  constructor() {
    this.serverHandler = null;
    this.watcher = null;
  }

  apply(compiler) {
    if (!Helpers.isHmr()) {
      return;
    }

    this.captureServerInstance(compiler.options)

    // Make sure this hook run once at last on first successful compilation
    compiler.hooks.done.tap('ReloadOnBladeChange', () => {
      if (this.watcher) {
        return true;
      }
      console.log(chalk.blue("\n" + 'HMR: Start watching blade templates ...'));
      this.initWatch();
    });
  }

  initWatch() {
    const bladePath = path.resolve(process.cwd(), 'resources/views/**/*.blade.php');

    this.watcher = chokidar
      .watch(bladePath, {
        ignoreInitial: true
      })
      .on('all', (event, path) => {
        const time = (new Date()).toLocaleTimeString().substr(0, 8);
        process.stdout.write(chalk.cyan(`HMR: ${time} - Blade change detected. Reloading browser ...` + '\r'))

        this.sendReloadSignal();
      });
  }

  captureServerInstance(webpackConfig) {
    const originalCallbackFn = webpackConfig.devServer.after;

    webpackConfig.devServer.after = (app, server) => {
      if (typeof originalCallbackFn === 'function') {
        originalCallbackFn(app, server);
      }

      this.serverHandler = server;
    }
  }

  sendReloadSignal() {
    if (typeof this.serverHandler !== 'undefined') {
      this.serverHandler.sockWrite(this.serverHandler.sockets, 'content-changed');
    }
  }
}
