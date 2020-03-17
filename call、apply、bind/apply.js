Function.prototype._apply = function(obj) {
    if(typeof obj !== 'function') {
        throw new Error(this + 'is not a function')
    }
    let args = arguments[1]
    const fn = Symbol('fn')
    obj[fn] = this
    const result = obj[fn](...args)
    delete obj[fn]
    return result
}