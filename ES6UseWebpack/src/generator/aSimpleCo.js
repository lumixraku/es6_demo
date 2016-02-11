/*
function* gen(){
  yield 1;
  yield 2;
}
var g0 = gen();
console.log(g0.next());
console.log(g0.next());
console.log(g0.next());


co(function* (){
    var now = Date.now();
    yield delay800; //由于yield后面应该接一个函数对象 而如果想给
    console.log(Date.now() - now);
});

function delay800(cb) {
    setTimeout(cb, 800);
}
*/

// co的作用是可以使异步的函数放在 yield关键字之后  然后整个异步流程的代码写法可以像同步函数一样
// 并不是实现了一个generator


// 观察使用co的代码  co接受一个参数  该参数是一个generator函数
// co(generator){ ...  }
// 再看一般generator的调用  在一个generator函数执行后返回一个对象g  通过g.next()不断调用下一个函数
// 所以co要做的事情 就是接受generator  并且通过每一次next()的返回值判断是否执行完毕来看是否需要继续调用 g.next()

//最简单的实现
//参考 https://cnodejs.org/topic/53474cd19e21582e740117df
co(function* (){
    var now = Date.now();
    yield delay800; //yield后面应该接一个函数对象
    yield delay500;
    console.log(Date.now() - now);
});

function delay800(callRecurence) {
    setTimeout(callRecurence, 800);
}
function delay500(callRecurence){
  setTimeout(function(){
    //some async ...
    callRecurence();
  },500)
};


function co(generator) {
  var gen = generator();
  function next(err, result) {
    if(err){
      return fn(err);
    }
    var step = gen.next(result); //{value: fn , done: false}
    if (!step.done) {//没有执行完毕 继续next

      //执行异步函数  step.value 就是yield后的异步函数
      //next 就是当前next(err,result)函数  通过递归的方式不断调用next达到多次调用 gen.next()
      step.value(next);
    } else {
      // console.log('done!');
    }
  }
  next();
}



//增加了错误处理函数(或者说是generator执行完完毕时的处理函数)
co(function* (){
    var now = Date.now();
    yield delay; //由于yield后面应该接一个函数对象 而如果想给
    console.log(Date.now() - now);
})(function(err){});

function delay(cb) {
    setTimeout(cb, 800);
}
//注意这里的形式是 co(...)()  表示co(...)应当返回一个函数

function co(generator){
  return function(endHandler){
    var gen = generator();
    function next(err, result) {
      if(err){
        return fn(err);
      }
      var step = gen.next(result); //{value: fn , done: false}
      if (!step.done) {//没有执行完毕 继续next

        //执行异步函数  step.value 就是yield后的异步函数
        //next 就是当前next(err,result)函数  通过递归的方式不断调用next达到多次调用 gen.next()
        step.value(next);
      } else {
        // console.log('done!');
      }
    }
    next();
  }
}

