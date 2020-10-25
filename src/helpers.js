const parseArgs = require('minimist');

const argv = parseArgs(process.argv.slice(2), {
  default: {
    mode: 'development',
    watch: false,
    hot: false
  }
});

module.exports = {
  isHmr() {
    return argv.hot;
  },
  isProduction() {
    return argv.mode === 'production';
  },
  isDev() {
    return argv.mode === 'development';
  },
  isWatch() {
    return argv.watch;
  },
  shouldVersion() {
    return !this.isHmr() && !this.isWatch()
  },
  sourceMapEnabled() {
    return !this.isProduction();
  },
  devTool() {
    if (this.isHmr() || this.isWatch()) {
      return 'eval-source-map'
    }

    if (this.isDev()) {
      return 'source-map'
    }

    return false;
  },
  hash(hash = 'fullhash') {
    return this.shouldVersion() ? `-[${hash}]` : '';
  },
};
