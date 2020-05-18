# Promise对象

## Promise.prototype.catch

- Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
- Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获
- 一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法

## Promise.prototype.finally

- finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的

## Promise.all()

- Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
- `const p = Promise.all([p1, p2, p3]);`
- p的状态由p1、p2、p3决定，分成两种情况
  - 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
  - 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数
  
## Promise.race()

- Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
- `const p = Promise.race([p1, p2, p3]);`
- 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数

## Promise.allSettled()

- Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入
- 该方法返回的新的 Promise 实例，一旦结束，状态总是fulfilled，不会变成rejected。状态变成fulfilled后，Promise 的监听函数接收到的参数是一个数组，每个成员对应一个传入Promise.allSettled()的 Promise 实例

## Promise.any()

- Promise.any()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。该方法目前是一个第三阶段的提案
- Promise.any()跟Promise.race()方法很像，只有一点不同，就是不会因为某个 Promise 变成rejected状态而结束

## Promise.resolve()

- 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用
- Promise.resolve方法的参数分成四种情况
  - 参数是一个 Promise 实例
  - 参数是一个thenable对象
  - 参数不是具有then方法的对象，或根本就不是对象
  - 不带有任何参数

## Promise.reject()

- Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
- 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致

## Promise.try()
