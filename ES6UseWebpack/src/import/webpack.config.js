module.exports = {
  entry: './moduleE.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
