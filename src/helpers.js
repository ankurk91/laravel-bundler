module.exports = {
  isHmr() {
    return process.argv.includes('--hot');
  },
  isProduction() {
    return process.env.NODE_ENV === 'production';
  },
  isDev() {
    return process.env.NODE_ENV === 'development';
  },
  isWatch() {
    return process.argv.includes('--watch');
  },
  shouldVersion() {
    return !this.isHmr() && !this.isWatch()
  },
  sourceMapEnabled() {
    return !this.isProduction();
  },
  devTool() {
    if (this.isHmr() || this.isWatch()) {
      return '#eval-source-map'
    }

    if (this.isDev()) {
      return '#source-map'
    }

    return false;
  },
  hash(hash = 'hash') {
    return this.shouldVersion() ? `-[${hash}]` : '';
  },
};
