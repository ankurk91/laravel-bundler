const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

let hotFilePath = null;

// Make sure to delete the `hot` file when user press CTRL+C
// https://stackoverflow.com/questions/10021373/what-is-the-windows-equivalent-of-process-onsigint-in-node-js
if (process.platform === "win32") {
  require("readline")
    .createInterface({
      input: process.stdin,
      output: process.stdout
    })
    .on("SIGINT", function () {
      process.emit("SIGINT");
    });
}

process.on('SIGINT', () => {
  deleteHotFile();
  console.log(chalk.blue("Terminating..."));
  process.exit(0);
});

function deleteHotFile() {
  if (!hotFilePath) {
    return
  }
  console.log(chalk.blue("\n" + `HMR: Deleting file "${hotFilePath}" if exists`));

  fs.unlink(hotFilePath, (error) => {
    if (error) {
      // silent
    }
  });
}

class HMRDetectPlugin {

  apply(compiler) {
    let config = compiler.options;
    const isHmr = process.argv.includes('--hot');
    hotFilePath = path.join(config.output.path, 'hot');

    compiler.hooks.entryOption.tap('HMRPlugin', () => {
      // Always delete the `hot` on startup
      deleteHotFile();

      if (!isHmr) {
        return;
      }

      console.log(chalk.blue(`HMR: Creating file "${hotFilePath}"`));

      let fileContents = +new Date();
      // todo write configurable url to file
      fs.writeFile(hotFilePath, fileContents.toString(),
        (error) => {
          if (error) {
            console.log(chalk.bold.red("Unable to create hot file:"));
            console.log(chalk.red(error))
          }
        }
      );
    });
  }
}

module.exports = HMRDetectPlugin;
