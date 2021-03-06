module.exports = {
  // entry: './src/generator/generator.js',
  // entry: './src/import/singletonEs6.js',
  entry: './src/import/moduleCC.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' }
    ]
  }
};
