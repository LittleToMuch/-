const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function _Promise(executor) {
    this.value = undefined
    this.reason = undefined
    this.status = 'pending'
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = value => {
        if(this.status === 'pending') {
            this.value = value
            this.status = 'resolved'
            this.onResolvedCallbacks.forEach(fn => fn())
        }
    }
    const reject = reason => {
        if(this.status === 'pending') {
            this.reason = reason
            this.status = 'rejected' 
            this.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
    
}

_Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}

    let promise2

    let promise2 = new _Promise((resolve, reject) => {
        if(this.status === 'resolved') {
            setTimeout(() => {
                try {
                    let x = onFulfilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (err) {
                    reject(err)
                }
            }, 0)
        }
        if(this.status === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (err) {
                    reject(err)
                }
            }, 0)
        }
        if(this.status === 'pending') {
            this.onResolvedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            })
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            })
        }
    })
    return promise2
}

function resolvePromise(promise2, x, resolve, reject) {
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise'))
    }
    let called
    if(Object.prototype.toString.call(x) === '[object Object]' || typeof x === 'function') {
        let then = x.then
        if(typeof then === 'function') {
            then.call(x, (y) => {
                if(called) return
                called = true
                resolvePromise(promise2, y, resolve, reject)
            }, (err) => {
                if(called) return
                called = true
                reject(err)
            })
        } else {
            resolve(x)
        }
    }
}

_Promise.resolve = function(value) {
    return new Promise((resolve, reject) => resolve(value))
}

_Promise.reject = function(reason) {
    return new Promise((resolve, reject) => reject(reason))
}

_Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let i = 0
        function processData(index, data) {
            arr[index] = data
            if(promises.length === ++i) {
                resolve(arr)
            }
        }
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
                processData(i, data)
            }, reject)
        }
    })
}

_Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}
