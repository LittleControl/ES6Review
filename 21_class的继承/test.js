function A(name) {
    this.name = name
}

let a = new A('Control')
console.log(a.__proto__ == A.prototype)//true
console.log(a.prototype)//undefined
console.log(A.__proto__ == Function.prototype)//true
console.log(A.__proto__ == Object.prototype)//false
console.log(Function.prototype.__proto__ == Object.prototype)//true
