let Num = function (x, y) {
    this.x = x,
        this.y = y
}

let num = new Num(1, 2)
console.log(num.__proto__)
console.log(Num.prototype)
console.log(num.__proto__ == Num.prototype)
console.log(Num.prototype.__proto__)
