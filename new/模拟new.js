function _new(fn, ...arg) {
    let obj = Object.create(fn.prototype)
    let result = fn.call(obj, ...arg)
    return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}