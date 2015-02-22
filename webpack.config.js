module.exports = {
  entry: './js/app.js',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader' }
    ]
  }
};
