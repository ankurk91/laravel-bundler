const chalk = require('chalk');

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
  ensureModule: (dependency) => {
    try {
      return require(dependency);
    } catch (error) {
      console.log(chalk.bold.red(`Required package "${dependency}" not found.`));
      console.log(error);
      process.exit(1);
    }
  }
};
