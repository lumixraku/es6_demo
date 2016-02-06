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
  constructor(name, lang) {
    // 直接调用父类构造器进行初始化
    super(name);
    this.lang = lang;
  }

  // 子类自己的实例方法
  program() {
    console.log('I\'am coding...', this.lang);
  }

  // 静态方法
  static LEVEL() {
    console.log('LEVEL BAD!');
  }
}

// 一些测试
var doggy = new Animal('doggy'),
  larry = new Programmer('larry');
doggy.sayName(); // ‘My name is doggy’
larry.sayName(); // ‘My name is larry’
larry.program(); // ‘I'm coding...’
Programmer.LEVEL(); // ‘LEVEL BAD!’


// get set
// ES6 get and set
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}

let bob = new Person('Bob');
console.log(bob.name); // Outputs 'BOB'
