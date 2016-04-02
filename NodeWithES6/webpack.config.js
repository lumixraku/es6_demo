module.exports = {
  // entry: './src/generator/generator.js',
  // entry: './src/import/singletonEs6.js',
  entry: './app/app.js',
  output: {
    filename: './build.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0&optional=runtime' }
    ]
  }
};
