let status = true
status = false
let promise = new Promise((resovle, reject) => {
    console.log('Promise has been runned')
    if (status) {
        return resovle(status)
    }
    if (!status) {
        return reject(status)
    }
}).then((status) => {
    console.log('Status: ' + status)
}, (status) => {
    console.log('Status: ' + status)
})
