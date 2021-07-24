module.exports = {
  // Handle js and jsx both
  test: /\.jsx?$/,
  loader: require.resolve('babel-loader'),
  exclude: /node_modules/,
  options: {
    cacheDirectory: true,
  }
};
