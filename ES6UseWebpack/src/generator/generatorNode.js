var fetch = require('node-fetch');
//fetch() 将会返回一个响应对象  这个对象不是纯文本
// fetch('https://api.github.com/users/github').then(function(data){
//     console.log(data);
// })


function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  console.log('test');
  // console.log(data);
  return data.json();
}).then(function(data){
  g.next(data);
});