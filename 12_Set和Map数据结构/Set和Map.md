# Set和Map

## Set

- ES6提供了新的数据结构`Set`.它类似于数组，但是成员的值都是唯一的，没有重复的值
- 向`Set`加入值的时候，不会发生类型转换，所以`5`和`"5"`是两个不同的值
- 另外，两个对象总是不相等的

### Set实例的属性和方法

- Set.prototype.constructor 构造函数,默认就是Set函数
- Set.prototype.size 返回Set实例的成员总数

操作数据的方法

- Set.prototype.add() 添加某个值,返回Set结构本身
- Set.prototype.delete() 删除某个值,返回一个布尔值,来表示是否删除成功
- Set.prototype.has() 返回一个布尔值
- Set.prototype.clear 清除所有成员,没有返回值

遍历成员的方法

- Set.prototype.keys() 返回键名的遍历器
- Set.prototype.values() 返回键值的遍历器
- Set.prototype.entries() 返回键值对的遍历器
- Set.prototype.forEach() 使用回调函数遍历每个成员
- keys方法、values方法、entries方法返回的都是遍历器对象。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
- entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等

## WeakSet

- WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别
- 首先，WeakSet 的成员只能是对象，而不能是其他类型的值
- 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
- WeakSet中的对象不适合应用,ES6规定WeakSet不可遍历

### 相关的方法

- 基本的构造函数 `let ws = new WeakSet()`
- WeakSet.prototype.add(value)
- WeakSet.prototype.delete(value)
- WeakSet.prototype.has(value)

## Map

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
- 为了解决这个问题,ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适
- 如果对同一个键多次赋值，后面的值将覆盖前面的值
- 如果读取一个未知的键，则返回undefined
- 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

### 实例的属性和操作方法

操作数据

- size 属性,返回 Map 结构的成员总数
- Map.prototype.set(key, value), 设置或新增键值对,返回当前Map对象,因此可以采用链式写法
- Map.prototype.get(key)
- Map.prototype.has(key)
- Map.prototype.delete(key), 返回一个布尔值
- Map.prototype.clear() 没有返回值

遍历方法

- Map.prototype.keys()
- Map.prototype.values()
- Map.prototype.entries()
- Map.prototype.forEach()
- 需要特别注意的是，Map 的遍历顺序就是插入顺序

## WeakMap

WeakMap与Map的区别有两点

- 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
- 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制
- WeakMap只有四个方法可用：get()、set()、has()、delete()
