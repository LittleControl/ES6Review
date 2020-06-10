# Iterator

## Iterator的遍历过程

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象
2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员
4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置

每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束

## 默认的Iterator接口

ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性  
原生具备 Iterator 接口的数据结构如下

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定  
一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可

## 调用Iterator接口的场合

- 解构赋值
- 扩展运算符
- yield*
- 其他场合
  - for...of
  - Array.from()
  - Map(), Set(), WeakMap(), WeakSet()（比如`new Map([['a',1],['b',2]])`）
  - Promise.all()
  - Promise.race()

## 字符串的Iterator接口

## Iterator与Generator函数

## 遍历对象的return和throw

- return方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句），就会调用return方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法
- 注意，return方法必须返回一个对象，这是 Generator 规格决定的
- throw方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法
