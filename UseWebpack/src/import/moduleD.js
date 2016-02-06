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


export {funA, funB, Data};
// 下面的做法也OK
// export {funA};
// export {funB};
// export {Data};