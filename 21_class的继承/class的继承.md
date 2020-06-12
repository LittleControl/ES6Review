# class的继承

## 简介

Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多

- 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象
- ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this
- 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法
- 另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例

## Object.getPrototyoeOf

Object.getPrototypeOf方法可以用来从子类上获取父类,因此，可以使用这个方法判断，一个类是否继承了另一个类

```JavaScript
Object.getPrototypeOf(ColorPoint) === Point
// true
```

## super关键字

- super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同

- 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数
- 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错

- 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
- 这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的
- ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例

注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错

```JavaScript
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}
```

## 类的prototype和__proto__属性

- 子类的__proto__属性，表示构造函数的继承，总是指向父类
- 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
- 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型

## 原生构造函数的继承

原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。

- Boolean()
- Number()
- String()
- Array()
- Date()
- Function()
- RegExp()
- Error()
- Object()

以前，这些原生构造函数是无法继承的,ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承,下面是一个继承Array的例子

```JavaScript
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined
```

## Mixin模式的实现

Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下

```JavaScript
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}
```
