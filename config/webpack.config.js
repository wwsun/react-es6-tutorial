var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, '../node_modules');

var dir_src = path.resolve(__dirname, '../src');
var dir_build = path.resolve(__dirname, '../build');

module.exports = {
  entry: path.resolve(dir_src, 'main.js'),
  output: {
    path: dir_build, // for standalone building
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build
  },
  module: {
    loaders: [
      {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};