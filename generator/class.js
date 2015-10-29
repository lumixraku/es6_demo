// 类的定义
class Animal {
    // ES6中的构造器，相当于构造函数
    constructor(name) {
        this.name = name;
    }

    // 实例方法
    sayName() {
        console.log('My Name is ' + this.name);
    }
}

// 类的继承
class Programmer extends Animal {
    constructor(name) {
        // 直接调用父类构造器进行初始化
        super(name);
    }

    // 子类自己的实例方法
    program() {
        console.log('I\'am coding...');
    }

    // 静态方法
    static LEVEL() {
        console.log('LEVEL BAD!');
    }
}

// 一些测试
var doggy=new Animal('doggy'),
larry=new Programmer('larry');
doggy.sayName(); // ‘My name is doggy’
larry.sayName(); // ‘My name is larry’
larry.program(); // ‘I'm coding...’
Programmer.LEVEL(); // ‘LEVEL BAD!’
