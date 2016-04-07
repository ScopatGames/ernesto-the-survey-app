var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test:/\.css$/,
      loader: 'style!css!postcss!resolve-url'
    }, {
      test:/\.json$/,
      loader: 'json'
    }, {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':'"development"'
    })
  ]
};
