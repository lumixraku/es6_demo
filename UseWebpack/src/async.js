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



async function getAsyncRs(name) {
  var symbol = await asyncFun1(name);
  console.log(symbol);
  var stockPrice = await asyncFun2(symbol);
  return stockPrice;
}

getAsyncRs('goog').then(function(result) {
  console.log(result);
});

function asyncFun1(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('async1' + name);
    }, 500);
  });
}
function asyncFun2(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('async222' + name);
    }, 1000);
  });
}



