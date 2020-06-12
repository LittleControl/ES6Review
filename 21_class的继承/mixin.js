function mix(...mixins) {
    class Mix {
        constructor() {
            for (let mixin of mixins) {
                copyProperties(this, new mixin()); // 拷贝实例属性
            }
        }
    }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }

    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

class A {
    iname = 'A'
    constructor() { }

    get name() {
        return this.iname
    }
}

class B {
    age = 'B'
    constructor() { }

    get age() {
        return this.age
    }
}

class C extends mix(A, B) {
    constructor() {
        super()
    }
    get all() {
        return this.iname + this.age
    }
}

let c = new C()
console.log(c.all)
