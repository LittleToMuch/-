Function.prototype._apply = function(obj) {
    const ctx = obj || window
    if(typeof this !== 'function') {
        throw new Error(`${this} is not a function`)
    }
    const fn = Symbol('fn')
    ctx[fn] = this
    const result = ctx[fn](...arguments[1])
    delete ctx[fn]
    return result
}

