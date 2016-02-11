// Generator的测试可以在http://www.es6fiddle.net/
//OR   https://babeljs.io/repl/ 在线测试

//Sample0
yield x + 2; //yield的意思是产出 这里表示生产 x+2 这个值
//PS  yield关键字只能在带有*号的函数中使用
function* gen(){
  yield 1;
  yield 2;
}
var g0 = gen();
console.log(g0.next()); //{"value":1,"done":false} 返回的是一个对象  包括yield后面的结果 以及这个函数是否执行完毕
console.log(g0.next());
console.log(g0.next());
//输出结果
// {"value":1,"done":false}
// {"value":2,"done":false}
// {"done":true}



// Sample1
var y = 'heheh';

function* gen(x) {
  console.log('start');
  //因为第一句就是yield  所以函数到这里若没有调用 g.next()是没有执行的
  //第一次调用 g.next() 则执完到第一个yield 之前的语句 以及计算需要yield的值
  //也就是第一次调用 g.next() 执行了 第一句log('start) 和 yield x+2
  y = yield x + 2;
  //yield的意思是产出 这里表示生产 x+2 这个值
  //看起来好像把 yield产出的值赋值给了y 实际上不是
  //y的值是在下一次(也就是第二次调用的时候由 g.next() 传入的)


  console.log('2nd');
  yield 2333;
  //第二次调用 g.next() 执行到第二个yield语句这里
  // console.log('3rd');
  // return y;
}


var g = gen(1);//此时并没有执行
console.log(g.next());
console.log('y is '+ y); //y仍是最初始的值
//输出
//start
// { value: 3, done: false }
//g.next().value 的结果是 yield后的值
console.log(g.next('haYYY')); // {"value":2333,"done":false}
console.log('y is '+ y); // y is haYYY

//第三次调用 整个函数执行完毕
console.log(g.next());
//输出的结果包括
//3rd
//{"value":"haYYY","done":true}  //第三次调用next()  其value就是*函数的返回值(因为已经木有yield语句了)
console.log('g is ',g); //{}
//PS 一个generator对象有n句 yield 总需要n+1句next() 才能走完整个流程




//Sample2
// function* foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// }

// var a = foo(5);

// console.log(a.next());  // Object{value:6, done:false}
// console.log(a.next());   // Object{value:NaN, done:false}
// console.log(a.next());   // Object{value:NaN, done:true}

//Sample 3
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var it = foo(5);

it.next()
// { value:6, done:false }
it.next(12)
// { value:8, done:false }
var r3 = it.next(13);
// { value:42, done:true }