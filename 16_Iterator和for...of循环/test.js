let arr = ['a', 'b', 'c']
let item = arr[Symbol.iterator]()
// console.log(item.next())
// console.log(item.next())

let obj = {
    data: ['Little', 'Control'],
    [Symbol.iterator]() {
        const self = this
        let index = 0
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}
for (const it of obj) {
    console.log(it)
}
