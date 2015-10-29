//Sample1
// function* gen(x) {
//     console.log('test');
//     var y = yield x + 2;
//     console.log('y is ' + y);
//     yield 4;
//     console.log('4');
//     return y;
// }


// var g = gen(1);
// console.log(g.next()); // { value: 3, done: false } //g.next().value 的结果是 yield后的值
// console.log(g.next('y')); // { value: undefined, done: true }
// console.log('g is ',g);


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
it.next(13)
// { value:42, done:true }