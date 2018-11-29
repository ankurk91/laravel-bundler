const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

module.exports = {
  isHmr() {
    return process.argv.includes('--hot');
  },
  isProduction() {
    return process.env.NODE_ENV === 'production';
  },
  isDev() {
    return !this.isProduction();
  },
  isWatch() {
    return process.argv.includes('--watch');
  },
  shouldVersion() {
    return !this.isHmr() && !this.isWatch()
  },
  hash(hash = 'hash') {
    return this.shouldVersion() ? `-[${hash}]` : '';
  },
  ensureModule: (dependency) => {
    try {
      return require(dependency);
    } catch (error) {
      console.log(chalk.bold.red(`Error: Required package "${dependency}" not found.`));
      console.log(chalk.blue('Install the package by running:'));

      let command = `npm install %s --save-dev`;
      if (fs.existsSync(path.resolve(process.cwd(), 'yarn.lock'))) {
        command = `yarn add %s --dev`;
      }
      console.log(chalk.blue(command), dependency);
      process.exit(1);
    }
  }
};
