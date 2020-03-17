class _Promise {
    status = 'pending'
    value = undefined
    reason = undefined
    FulfilledCallback = []
    RejectedCallback = []
    constructor(executor) {
        let resolve = (value) => {
            if(this.status === 'pending') {
                this.value = value
                this.status = 'resolved'
                this.FulfilledCallback.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if(this.status === 'pending') {
                this.reason = reason
                this.status = 'rejected'
                this.RejectedCallback.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
        
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        let promise2 = new _Promise((resolve, reject) => {
            if(this.status === 'resolved') {    
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        this.resolvePromise(promise2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
                
            }
            if(this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        this.resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if(this.status === 'pending') {
                this.FulfilledCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.RejectedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })
        
        return promise2
    }

    resolvePromise(promise2, x, resolve, reject) {
        if (x === promise2) {
            return reject(new TypeError('Chaining cycle detected for promise'))
        }
        if(Object.prototype.toString.call(x) === '[object Object]' || typeof x === 'function') {
            let then = x.then
            if(typeof then === 'function') {
                then.call(x, (y) => {
                    resolve(y)
                }, err => reject(err))
            }
        } else {
            resolve(x)
        }
    }

    static resolve(value) {
        return new _Promise((resolve, reject) => resolve(value))
    }

    static reject(reason) {
        return new _Promise((resolve, reject) => reject(reason))
    }

    static all(promises) {
        return new _Promise((resolve, reject) => {
            let arr = []
            let i = 0
            function processData (index, data) {
                arr[index] = data
                if(++i === promises.length) {
                    resolve(arr)
                }
            }
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    processData(i, res)
                }, reject)
            }
        })
    }

    static race(promises) {
        return new _Promise((resolve, reject) => {
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }

    finally(callback) {
        return this.then(value => {
            return _Promise.resolve(callback()).then(() => {
                return value
            })
        }, err => {
            return _Promise.resolve(callback()).then(() => {
                throw err
            })
        })
    }
}

