
function* gen(x){
  var y = yield x + 2;
  return y;
}


var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }