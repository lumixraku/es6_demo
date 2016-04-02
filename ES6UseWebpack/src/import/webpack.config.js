module.exports = {
  entry: './moduleBB.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders:[
      //loader后面的参数必需  否则ES6的 class 不能通过编译
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' }
    ]
  }
};
