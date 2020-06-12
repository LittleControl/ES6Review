# class的基本语法

## 简介

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

- 类的内部所有定义的方法，都是不可枚举的（non-enumerable）

## constructor方法

类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行

## getter和seter

## class表达式

```JavaScript
const MyClass = class Me {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this.name
    }
    getClassName() {
        return Me.name
    }
}
```

上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用

## 注意点

- 严格模式,类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式
- 不存在提升
- name属性,name属性总是返回紧跟在class关键字后面的类名
- Generator函数
- this的指向,类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错

## 静态方法

- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
- 如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法
- 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例
- 父类的静态方法，可以被子类继承

## 实例属性的新写法

实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层

```JavaScript
class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    // ...
  }
}
```

## 静态属性

目前可行的办法

```JavaScript
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

## 私有方法和私有属性

## new.target属性

new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的

- Class 内部调用new.target，返回当前 Class
- 需要注意的是，子类继承父类时，new.target会返回子类
- 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类
