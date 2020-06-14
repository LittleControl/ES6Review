# module的语法

## 概述

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入  
除了静态加载带来的各种好处，ES6 模块还有以下好处。

- 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
- 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

## 严格模式

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`

## export命令

```JavaScript
export let name = 'Control'
export class Color {
    constructor(color) {
        this.color = color
    }
}

let color = 'blue'
let width = '30px'
export {
    color as Blue,
    widh as wwidth,
    width as wwwidth
}
```

## import命令

- 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名
- import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口

```JavaScript
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```

- 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性
- import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置
- 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构
- import语句会执行所加载的模块
- 如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次

## 模块的整体加载

`import * as test from './test'`

## export default 命令

- export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令
- 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字
- 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句

## import与export的复合写法

如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起

```JavaScript
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```

上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar

## 模块的继承

假设有一个circleplus模块，继承了circle模块

```JavaScript
// circleplus.js
export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
```

上面代码中的`export *`，表示再输出circle模块的所有属性和方法。注意，**export *命令会忽略circle模块的default方法**。然后，上面代码又输出了自定义的e变量和默认方法

## 跨模块常量

就是将需要的跨模块的常量都定义到一个模块中,然后其他的模块用到的时候引入就可以了

## import()

- 在语法上，条件加载就不可能实现。如果import命令要取代 Node 的require方法，这就形成了一个障碍。因为require是运行时加载模块，import命令无法取代require的动态加载功能
- ES2020提案 引入import()函数，支持动态加载模块
