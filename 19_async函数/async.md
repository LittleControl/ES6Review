# async

## 含义

一句话,就是Generator函数的语法糖

- 内置执行器
- 更好的语义
- 更广的适用性
- 返回值是Promise

## 基本用法

简单来说,可以用于所有有函数声明的地方,包括对象内部或者箭头函数

```JavaScript
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
```

- async函数内部return语句返回的值，会成为then方法回调函数的参数
- async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到
- 正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值
- 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行
- 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行
- 另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误

### 使用注意点

- await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中
- 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
- await命令只能用在async函数之中，如果用在普通函数，就会报错
- async 函数可以保留运行堆栈

## async函数的实现原理

async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里
