# Generator函数的语法

- Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同
- ES6 没有规定，function关键字与函数名之间的星号，写在哪个位置。这导致下面的写法都能通过

```JavaScript
function * foo(x, y) { ··· }
function *foo(x, y) { ··· }
function* foo(x, y) { ··· }
function*foo(x, y) { ··· }
```

## 关于yield

- 如果该函数没有return语句，那么最后返回的对象的value属性值为`undefined`
- 需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能
- 另外需要注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错
- yield表达式如果用在另一个表达式之中，必须放在圆括号里面
  
  ```JavaScript
  function* demo() {
    console.log('Hello' + yield); // SyntaxError
    console.log('Hello' + yield 123); // SyntaxError

    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
  }
  ```

- yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号
  
  ```JavaScript
  function* demo() {
    foo(yield 'a', yield 'b'); // OK
    let input = yield; // OK
  }
  ```

### next方法的参数

- `yield`表达式本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值
- 注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数

## Generator.prototype.throw

- Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获
- 如果Generator 函数内部的catch语句已经执行过了，则再捕捉到错误
- 如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获
- throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法

## Generator.prototype.return

- Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数
- 遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo
- 如果return方法调用时，不提供参数，则返回值的value属性为undefined
- 如果 Generator 函数内部有try...finally代码块，且正在执行try代码块，那么return方法会导致立刻进入finally代码块，执行完以后，整个函数才会结束

## yield* 表达式

- 如果在 Generator 函数内部，调用另一个 Generator 函数。需要在前者的函数体内部，自己手动完成遍历
- ES6 提供了yield*表达式，作为解决办法，用来在一个 Generator 函数里面执行另一个 Generator 函数
- 实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历

## 作为对象属性的Generator函数

```JavaScript
let obj = {
    name: 'Control',
    *getName() {
        yield 'Little',
        return 'Control'
    }
}
```

## Generator函数的this

Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法

## 应用

- 异步操作的同步化表达
- 控制流管理
- 部署Iterator接口
- 作为数据结构
