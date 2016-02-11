//thunk 就是将多参数的函数替换成单参数的版本  并且只接收回调函数作为参数
// 搬运 http://www.ruanyifeng.com/blog/2015/05/thunk.html

//所谓替换成单参数的版本 实际上就是讲一个函数变成多个函数的嵌套
// 它是多参数函数变成了一个单参数函数，只接受回调函数作为参数。这个单参数版本，就叫做 Thunk 函数。
// 任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式

//PS 需要注意的是 并不是每一层参数都只接受一层函数  thunk主要是把 回调函数这个参数  和其他参数区分开
//将 fs(filename,callback) 变成 fs(filename)(callback)
// foo(a,b,c,callback)  变成foo(a,b,c)(callback)



// 例如readFile
var fs = require('fs');
function callback(err){

}
function thunkRead(filename){
  return function(errCb){
    fs.readFile(filename, errCb);
  }
}
//那么fs.readerFile('a.txt', callback)  转为下面的调用方式
thunkRead('a.txt')(callback)

//我们需要一种通用的函数 能够将多参数的函数转变为单参数的形式
//也就是把一个函数 thunkify化
// 使其可以通过下面的方式调用
// readFileAfterThunkify = Thunk(fs.readFile);
// readFileAfterThunkify('a.txt')(callback);

var Thunk = function(fn){
  return function(){
    var args = [];
    args.push(arguments[0]);
    return function(cb){
      args.push(cb);
      fn.apply(this,args);
    }
  }
}
readFileAfterThunkify = Thunk(fs.readFile);
readFileAfterThunkify('a.txt')(callback);


function thunkify(fn){
  return function(){
    var args = [];
    var ctx = this;
    args = [].slice.call(arguments);
    return function(done){
      var called;
      args.push(function(){
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });
      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};


function f(a, b, callback){
  var sum = a + b;
  callback(sum);
  callback(sum);
}

var ft = thunkify(f);
ft(1, 2)(function log(msg){console.log(msg)});
// 3