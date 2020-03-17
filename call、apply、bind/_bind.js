Function.prototype._bind = function(obj) {
    if(typeof this !== 'function'){
        throw new Error(`${this} is not a function`)
    }
    const args = [...arguments].slice(1)
    const _this = this
    const bound = function(...rest) {
        if(this instanceof bound) {
            return new _this(...args, ...rest)
        }
        return _this.apply(obj, [...args, ...rest])
    }
    return bound
}