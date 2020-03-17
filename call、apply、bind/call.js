Function.prototype._call = function(obj) {
    if(typeof obj !== 'function') {
        throw new Error(obj + 'is not a function')
    }
    let args = [...arguments].slice(1)
    let fn = Symbol('bn')
    obj[fn] = this
    let result = obj[fn](...args)
    delete obj[fn]
    return result
}