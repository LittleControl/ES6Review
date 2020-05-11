let ws = new WeakSet()
let obj1 = {
    name: 'Little',
    age: 22
}
let obj2 = {
    name: 'Control',
    age: 22
}
console.log(ws)
ws.add(obj1)
console.log(ws)
ws.add(obj2)
console.log(ws)
