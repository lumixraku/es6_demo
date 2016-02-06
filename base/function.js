//箭头函数的用途和匿名函数比较接近
function(foo){returb foo+'heheh'}
// 等同于
foo => foo + 'heheh'
foo => {return foo + 'heheh'}
(foo)=> {return foo + 'heheh'}

// foo是函数变量名 => 之后是函数体  如果函数只有一行  可以省去return

let names = ['0xx','1xx','2xx','3xx','4xx','5xx'];
let newNames = names.map((item,index)=>{
  return {index:index, value: item}
})
.filter((item) => {return item.index %2 == 0})
.map((item) => [item] )
.reduce((a,b) => a.concat(b));

//map filter concat 返回新数组
console.log(newNames);


//箭头函数的作用域
class A{
  constructor(val){
    this.val = val
  }
  foo(){
    //定义b为一个函数
    let b = ()=>{
      return 'the val is ' + this.val
    }
    return b;
  }
}
let a = new A('heheda')
a.foo()();  //this.val is heheda
/*
foo的这段代码相当于
foo: function foo() {
  var _this = this;

  //定义b为一个函数
  var b = function b() {
    return 'the val is ' + _this.val;
  };
  return b;
}
*/

// OR ===============================
let AA = {
  val:'heiheihh',
  //在ES6中   一个属性若是函数可以省略 function关键字  但是属性名后加上()以表示是一个函数
  foo() {
    let b = ()=>{
      return 'the val is ' + this.val
    }
    return b;
  }
}
AA.foo()();
// 这段代码的babel后的结果
/*
foo: function foo() {
  var _this = this;

  var b = function b() {
    return 'the val is ' + _this.val;
  };
  return b;
}
*/

let DataCenter = {
  baseUrl: 'http://localhost:3000/api/comments',
  foo(params){
    fetch(this.baseUrl)
    .then(res => {
      console.log(res);  //fetch得到的并不是文本而是一个对象  这个对象拥有json()方法
      return res.json();
    })
    .then(res => {
      console.log(this.baseUrl); //不用担心this指向window
    })
  }
}
DataCenter.foo();
/*
Babel后的结果
  foo: function foo(params) {
    var _this = this;

    fetch(this.baseUrl).then(function (res) {
      console.log(res); //fetch得到的并不是文本而是一个对象  这个对象拥有json()方法
      return res.json();
    }).then(function (res) {
      console.log(_this.baseUrl);
    });
  }
*/