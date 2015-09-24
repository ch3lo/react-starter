var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:3000');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  devServer: {
    contentBase: '',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000
  },
  //devtool: 'eval',
  devtool: 'source-map',
  entry: {
    app: getEntrySources([
      './src/app'
    ])
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      exclude: /(font|js|node_modules)/,
      loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true'),
      include: path.join(__dirname, 'stylesheet')
    },
    { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
