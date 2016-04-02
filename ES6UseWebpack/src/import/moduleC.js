//ES6的一个文件可以export多个对象

function funA(){
  console.log('fun A');
}

function funB(){
  console.log('fun B');
}

let Data = {
  baseUrl: 'http://localhost:3000/api/comments',
  foo(params){
    fetch(this.baseUrl)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      console.log(this.baseUrl);
    })
  }
};
//可以同时导出default 和 其他小模块
export default Data;
export {funA, funB};
// 下面的做法也OK
// export {funA};
// export {funB};
// export {Data};