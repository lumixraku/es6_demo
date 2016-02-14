//最早接触的模板字符串
context.fillText("Ceci n'est pas une chaîne.", x, y);

//模板字符串不使用引号来闭合(单引号  双引号都不使用)
//而是使用  小句号 ``  也就是数字1左边的键

//模板字符串非常适合html的拼装
var maxPenalty = 90;
var html = `
<h1>Watch out!</h1>
  <p>Unauthorized hockeying can result in penalties
  of up to ${maxPenalty} minutes.
</p>
`;
console.log(html);
// <h1>Watch out!</h1>
//   <p>Unauthorized hockeying can result in penalties
//   of up to 90 minutes.
// </p>

var x = 1;
var y = 2;
html =
'<p>\n' +
  'Unauthorized hockeying ' + x + '+' + y + '=' + (x+y) + ' penalties\n' +
'</p>';
console.log(html);
html =
`<p>
  Unauthorized hockeying ${x}+${y}=${x+y} penalties
</p>`;
console.log(html);
/*
<p>
Unauthorized hockeying 1+2=3 penalties
</p>
<p>
  Unauthorized hockeying 1+2=3 penalties
</p>
*/


// 模板字符串作为参数
var a = 5, b = 10;
function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

//调用tag函数  `Hello ${ a + b } world ${ a * b }` 是传入的参数
var rs = tag `Hello ${ a + b } world ${ a * b }`;
console.log(rs);// "Bazinga!"

//这里有两个参数  stings 和 keys
function template1(strings, ...keys) {
  console.log(strings);
  console.log(keys);
}

template1 `${0}${1}${0}!`;
// ["","","","!"]
// [0,1,0]


function template2(strings, ...keys) {
  console.log(strings);// ["","","","!"]
  console.log(keys);  // [0,1,0]
  return (function(...values) {
    console.log(values); //('Y', 'A')
  });
}

template2 `${0}${1}${0}!`('Y', 'A');  // "YAY!"

function template3(strings, ...keys){
  //strings ["","","","","!"]
  //keys   [0,1,1,0]
  return function(...values){
    var rs = [];
    keys.forEach(function(keyItem , index){
      // console.log(values[keyItem]);
      rs.push(values[keyItem] + strings[index+1] );
    });
    return rs.join('');
  }
}
console.log(template3 `${0}${1}${1}${0}!`('Y','A')); //YAAY!
