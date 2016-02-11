// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value)
// }

// asyncPrint('hello world', 500);



// async function getAsyncRs(name) {
//   var symbol = await asyncFun1(name);
//   console.log(symbol);
//   var stockPrice = await asyncFun2(symbol);
//   return stockPrice;
// }

// getAsyncRs('goog').then(function(result) {
//   console.log(result);
// });

// function asyncFun1(name) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('async1' + name);
//     }, 500);
//   });
// }
// function asyncFun2(name) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('async222' + name);
//     }, 1000);
//   });
// }


// ajax =====================================
// var $ = require('jquery');
var get = function (url){
  return new Promise(function (resolve, reject){
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', url)
      xhr.onload = function () {
        resolve(JSON.parse(xhr.responseText));
      }
      xhr.send();
  });
};

async function getAsync(url) {
  var rs = await get(url);
  return rs;
}

getAsync('https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=').then(function (result){
  console.log(result);
});



