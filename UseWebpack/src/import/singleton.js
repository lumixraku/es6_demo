var getInstance = (function() {
    var instance;
    return function(newInstance){
        if(newInstance){
            instance = newInstance;
        }
        return instance;
    }
})();

function Universe(){
    if(getInstance()) return getInstance();
    getInstance(this);
}

var a = new Universe(); //a才是最真正的初始化对象  此时全局变量instance就是a  可以通过getInstance() 得到instance   发现 getInstance() == a 为TRUE
var b = new Universe(); //b这里一进去Universe 就到if中去了 此时对于b Universe()就是一个普通的函数  其返回值是  getInstance()
console.log(a == b);