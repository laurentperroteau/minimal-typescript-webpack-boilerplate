const path = require('path');

module.exports = {
  entry    : './src/index.ts',
  devtool  : 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module : {
    rules: [
      {
        test   : /\.ts?$/,
        use    : 'ts-loader',
        exclude: /node_modules/
      },
      {
        test   : /\.ts$/,
        enforce: 'pre',
        loader : 'tslint-loader',
        options: {/* Loader options go here */}
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output : {
    filename: 'bundle.js',
    path    : path.resolve(__dirname, 'dist')
  }
};
