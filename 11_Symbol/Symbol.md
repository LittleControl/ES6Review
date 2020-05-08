# Symbol

- 从根本上防止属性名的冲突。这就是ES6引入`Symbol`的原因
- `Symbol`是JS一种新的原始数据类型,至此,JS共有7种数据类型了 `Object,Number,Boolean,undefined,null,String,Symbo`
- `Symbol`值不能与其他类型的值进行运算
- `Symbol`值可以显式转为字符串
- `Symbol`值也可以转为布尔值,但是不可以转为数值

## Symbol.prototype.description

## 作为属性名的Symbol

- `Symbol`作为对象属性名时,不能用点运算符

## 实例:消除魔术字符串

魔术字符串指的是,在代码之中多次出现,与代码形成强耦合的某一个具体的字符串或者数值.风格良好的代码,应该尽量消除魔术字符串,改由含义清晰的变量代替

## 属性名的遍历

- Object.getOwnPropertySymbols()
- Reflect.ownKeys()方法可以返回所有类型的键名,包括常规键名和Symbol键名
- 由于Symbol值作为键名,不会被常规方法遍历得到.我们可以利用这个特性,为对象定义一些非私有的,但又希望只用于内部的方法

## Symbol.for(), Symbo.keyFor()

- `Symbol.for`接受一个字符串作为参数,然后搜索有没有以该参数作为名称的`Symbol`值.如果有,就返回这个`Symbol`值,否则就新建一个以该字符串为名称的Symbol值,并将其注册到全局
- `Symbol.keyFor()`方法返回一个已登记的`Symbol`类型值的key
- 需要注意的是,`Symbol.for()`为Symbol值登记的名字,是全局环境的,不管有没有在全局环境运行

## 实例: 模块的Singleton模式

Singleton模式指的是调用一个类,任何时候返回的都是同一个实例.

## 内置的`Symbol`值

除了定义自己使用的Symbol值以外,ES6还提供了11个内置的Symbol值,指向语言内部使用的方法

- Symbol.hasInstance
  - 对象的`Symbol.hasInstance`属性,指向一个内部方法.当其他对象使用instanceof运算符,判断是否为该对象的实例时,会调用这个方法
- Symbol.isConcatSpreadable
  - 等于一个布尔值,表示对象用于Array.prototype.concat()时,是否可以展开
- Symbol.species
  - 指向一个构造函数,创建衍生对象时,会使用该属性
- Symbol.match
  - 指向一个函数,当执行str.match()时,如果该属性存在,会调用它,返回该方法的返回值
- Symbol.replace
  - 指向一个方法,当对象调用String.prototype.replace方法时,会返回该方法的返回值
- Symbol.search
  - 指向一个方法,当对象被String.prototype.search方法调用时,会返回该方法的返回值
- Symbol.split
  - 指向一个方法,当该对象被String.prototype.split方法调用时,会返回该方法的返回值
- Symbol.iterator
  - 指向该对象的默认遍历器方法
- Symbol.toPrimitive
  - 指向一个方法,该对象被转为原始类型的值时,会调用这个方法,返回该对象对应的原始类型值
- Symbol.toStingTag
  - 指向一个方法,在该对象上调用Object.prototype.toString方法时,如果这个属性存在,它的返回值会出现在toString方法返回的字符串之中,表示对象的类型.也就是说,这个属性可以用来定制`[object Object] [object Array]`中`object`后面的那个字符串
- Symbol.unscopables
  - 指向一个对象,该对象使用`with`关键字时,哪些属性会被with环境排除
