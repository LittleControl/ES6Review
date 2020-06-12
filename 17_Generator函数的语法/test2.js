function* test() {
    console.log('nothing')
    let name = yield 'Control'
    console.log('Little')
    let age = yield 18
    console.log(age)
    return {
        name,
        age
    }
}

let item = test()
item.next()
item.next()
item.next()
