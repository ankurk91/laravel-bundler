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
  }
};
