const path = require('path');
const fs = require('fs');

class HMRPlugin {

  apply(compiler) {
    let config = compiler.options;
    const isHmr = process.argv.includes('--hot');
    let filePath = path.join(config.output.path, 'hot');

    compiler.hooks.entryOption.tap('HMRPlugin', () => {
      console.log(`HMR: Deleting file "${filePath}" if exists`);

      fs.unlink(filePath, (error) => {
        if (error) {
          // silent
        }
      });

      if (!isHmr) {
        return;
      }

      console.log(`HMR: Creating file "${filePath}"`);

      let fileContents = +new Date();
      // todo write configurable url to file
      fs.writeFile(filePath, fileContents.toString(),
        (error) => {
          if (error) {
            console.error(error)
          }
        }
      );
    });
  }
}

module.exports = HMRPlugin;
