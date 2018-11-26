const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const Helpers = require('../helpers');

let hotFilePath = null;

// Make sure to delete the `hot` file when user press CTRL+C
// https://stackoverflow.com/questions/10021373/what-is-the-windows-equivalent-of-process-onsigint-in-node-js
process.on('SIGINT', () => {
  deleteHotFile();
  console.log(chalk.blue('Terminating ...'));
  process.exit(0);
});

function deleteHotFile() {
  if (!hotFilePath) {
    return
  }

  if (!fs.existsSync(hotFilePath)) {
    return;
  }

  console.log(chalk.blue("\n" + `HMR: Deleting file "${hotFilePath}"`));

  fs.unlinkSync(hotFilePath, (error) => {
    if (error) {
      // silent
    }
  });
}

class HMRDetectPlugin {

  apply(compiler) {
    let config = compiler.options;
    hotFilePath = path.join(config.output.path, 'hot');

    // Make sure this hook runs at very beginning but once
    compiler.hooks.entryOption.tap('HMRPlugin', () => {
      // Always delete the `hot` on startup
      deleteHotFile();

      if (!Helpers.isHmr()) {
        return;
      }

      console.log(chalk.blue(`HMR: Creating file "${hotFilePath}"`));

      let fileContents = +new Date();
      // todo write configurable url to file
      fs.writeFile(hotFilePath, fileContents.toString(),
        (error) => {
          if (error) {
            console.log(chalk.bold.red('Error: Unable to create hot file:'));
            console.log(chalk.red(error));
            process.exit(1);
          }
        }
      );
    });
  }
}

module.exports = HMRDetectPlugin;
