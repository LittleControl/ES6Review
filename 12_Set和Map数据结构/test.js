let arr = ['a', 'b', 'a', 'c']
console.log('======')
let set = new Set(arr)
// console.log(set)
set.clear()
// console.log(set)
set.add({ a: 'b' })
// console.log(set)

let set2 = new Set(arr)
let keys = set2.keys()
for (let key of keys) {
    console.log(key)
}
console.log('==============')
let values = set2.values()
for (let value of values) {
    console.log(value)
}

let entries = set2.entries()
for (let item of entries) {
    console.log(item)
}
