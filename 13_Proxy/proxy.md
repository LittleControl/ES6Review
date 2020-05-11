# Proxy

- Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
- ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例 `var proxy = new Proxy(target, handler);`
- Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为
- 注意，要使得Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象（上例是空对象）进行操作

Proxy 支持的拦截操作

- get(target, propKey, receiver)
- set(target, propKey, value, receiver)
- has(target, propKey)
- deleteProperty(target, propKey)
- ownKeys(target)
- getOwnPropertyDescriptor(target, propKey)
- defineProperty(target, propKey, propDesc)
- preventExtensions(target)
- getPrototypeOf(target)
- isExtensible(target)
- setPrototypeOf(target, proto)
- apply(target, object, args)
- construct(target, args)

## this问题

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理
