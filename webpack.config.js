var path = require('path');
// var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
          }},
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
