var co = require('co');
//co 是一个基于generator的控制模块
var fs = require('fs');
var request = require('request');
var thunkify = require('thunkify');


// co(function* (){
//     var now = Date.now();
//     yield delay800; //yield后面应该接一个函数对象
//     console.log(Date.now() - now);
// });

function delay800() {
    setTimeout(cb, 800);
}
//在co中yield关键字之后可以接受的对象有
// thunks (functions)
// array (parallel execution)
// objects (parallel execution)
// generators (delegation)
// generator functions (delegation)
// promises.

//co和readfile
var readThunk = thunkify(fs.readFile);
//co肯定是将第一个yield的结果通过g.next()的方式传给了rs
//
co(function *(){
  var rs = yield readThunk('package.json','utf8');
  console.log(rs); //package.json的文件内容
});

/*
request 原本的用法
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
*/

//将request函数thunkify化
var reqThunk = thunkify(request);
//经过thunkify化之后  reqThunk('http://www.baidu.com') 就是一个函数
// reqThunk('http://www.baidu.com')(function(err, res, body){
//   console.log(body);
// });

//request.get等同于request2
// request.get('http://baidu.com'), function(err, res, body){
// });

co(function *(){
  var a = yield reqThunk('http://www.baidu.com');
  var b = yield reqThunk('http://cn.bing.com');
  console.log(a[0].statusCode);
  console.log(b[0].statusCode);
});
