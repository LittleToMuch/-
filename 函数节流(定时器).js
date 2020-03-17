const throttle = (fn, wait) => {
    let timerId
    return (...args) => {
        setTimeout(() => {
            timerId = null
            fn.call(this, ...args)
        }, wait);
    }
}