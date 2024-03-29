import yargs from 'yargs-parser';

const argv = yargs(process.argv.slice(2), {
  default: {
    mode: process.env.NODE_ENV || 'development',
    watch: false,
    hot: false,
    _: []
  }
});

export default {
  nodeEnv() {
    return argv.mode;
  },
  isHmr() {
    return argv.hot || argv._.includes('serve');
  },
  isProduction() {
    return this.nodeEnv() === 'production';
  },
  isDev() {
    return this.nodeEnv() === 'development';
  },
  isWatch() {
    return argv.watch || argv._.includes('watch');
  },
  shouldVersion() {
    return !this.isHmr() && !this.isWatch()
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
  sourceMapsInProduction() {
    return this.isProduction() ? 'source-map' : this.devTool();
  }
};
