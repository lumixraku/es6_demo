var co = require('co');

co(function* (){
    var now = Date.now();
    yield delay800; //由于yield后面应该接一个函数对象 而如果想给
    console.log(Date.now() - now);
});

function delay800() {
    setTimeout(cb, 800);
}