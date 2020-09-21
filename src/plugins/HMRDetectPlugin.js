const Helpers = require('../helpers.js');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = class HMRDetectPlugin {

  constructor() {
    this.hotFilePath = null;
  }

  apply(compiler) {
    this.registerExitEvents();

    const config = compiler.options;
    this.hotFilePath = path.join(config.output.path, 'hot');

    // Make sure this hook runs at very beginning but once
    compiler.hooks.afterEnvironment.tap('HMRDetectPlugin', () => {
      // Always delete the `hot` file on startup
      this.deleteHotFile();

      if (!Helpers.isHmr()) {
        return;
      }

      console.log(chalk.blue(`HMR: Creating file "${this.hotFilePath}"`));

      fs.writeFile(this.hotFilePath, this.getFileContents(config.devServer),
        error => {
          if (error) {
            console.log(chalk.bold.red('Error: Unable to create hot file!'));
            console.error(error);
            process.exit(1);
          }
        }
      );
    });
  }

  registerExitEvents() {
    // Make sure to delete the `hot` file when user press CTRL+C
    // https://stackoverflow.com/questions/10021373/what-is-the-windows-equivalent-of-process-onsigint-in-node-js
    process.on('SIGINT', () => {
      console.log(chalk.blue("\n" + 'Terminating ...'));
      this.deleteHotFile();
      process.exit(0);
    });

    // Detect IDE window close
    process.on('SIGHUP', (code) => {
      this.deleteHotFile();
      process.exit(0);
    });
  }

  deleteHotFile() {
    if (!this.hotFilePath) {
      return
    }

    if (!fs.existsSync(this.hotFilePath)) {
      return;
    }

    console.log(chalk.cyan("\n" + `HMR: Deleting file "${this.hotFilePath}"`));

    fs.unlinkSync(this.hotFilePath, (error) => {
      if (error) {
        console.log(chalk.bold.red("\n" + `Error: Unable to delete hot file`));
        console.error(error)
      }
    });
  }

  getFileContents(configs) {
    let protocol = configs.https ? 'https' : 'http';

    return protocol +
      '://' +
      configs.host +
      ':' +
      configs.port;
  }
};
