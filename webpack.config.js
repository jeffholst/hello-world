const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'hello-world.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'HelloWorld'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};
