module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "va-integration.js"
    },
    module: {
        loaders: [
            {
              exclude: /node_modules/,
              loader: 'babel',
                    query: {
        /*plugins: ['lodash'],*/
        presets: [ 'react','es2015', 'stage-1']
      }
             }]
    },
      resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
