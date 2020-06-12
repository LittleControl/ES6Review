function* nothing() {
    yield 'Little'
    yield 'Control'
    return 'Rain'
}

let item = nothing()
console.log(item)
console.log(item.next());
console.log(item.next())
console.log(item.next())
