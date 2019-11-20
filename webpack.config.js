module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "va-integration.js"
  },
  module: {
    rules: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};
