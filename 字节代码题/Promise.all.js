Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let idx = 0

        function process(index, data) {
            arr[index] = data
            if(++idx === promises.length) {
                resolve(arr)
            }
        }

        for(let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                process(i, res)
            })
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(res => resolve(res), err => reject(err))
        }
    })
}

Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

Promise.reject = function(value) {
    return new Promise((resolve, reject) => reject(value))
}

class Promise {
    status = 'pending'
    value = undefined
    reason = undefined
    onFulfilledCallback = []
    onRejectedCallback = []
    constructor(executor) {
        const resolve = (value) => {
            if(this.status === 'pending') {
                this.value = value
                this.status = 'resolved'
                this.onFulfilledCallback.forEach(fn => fn())
            }
        }
        const reject = (reason) => {
            if(this.status === 'pending') {
                this.reason =reason
                this.status = 'rejected'
                this.onRejectedCallback.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
        let promise2 = new Promise((resolve, reject) => {
            if(this.status === 'pending') {
                this.onFulfilledCallback.push(() => {
                    setTimeout(() => {
                        let x = onFulfilled(this.value)
                        this.resolvePromise(promise2, x, resolve, reject)
                    },0)
                })
                this.onRejectedCallback.push(() => {
                    setTimeout(() => {
                        let x = onRejected(this.reason)
                        this.resolvePromise(promise2, x, resolve, reject)
                    },0)
                })
            }

            if(this.status === 'resolved') {
                let x = onFulfilled(this.value)
                this.resolvePromise(promise2, x, resolve, reject)
            }

            if(this.status === 'rejected') {
                let x = onFulfilled(this.reason)
                this.resolvePromise(promise2, x, resolve, reject)
            }
        })
        return promise2
    }

    resolvePromise(promise2, x, resolve, reject) {
        if(x === promise2) {
            throw new Error('xxxx')
        }
        if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
            let then = x.then
            try {
                if(typeof then === 'function') {
                    then.call(x, y => resolve(y), err => reject(err))
                } else {
                    resolve(x)
                }
            } catch (error) {
                reject(error)
            }
        } else {
            resolve(x)
        }
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let arr = []
            let inx = 0
            function process (index, data) {
                arr[index] = data
                if(++inx === promises.length) {
                    resolve(arr)
                }
            }
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => process(i, res))
            }
        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => resolve(res))
            }
        })
    }

    static resolve(value) {
        return new Promise((resolve, reject) => resolve(value))
    }

    static reject(value) {
        return new Promise((resolve, reject) => reject(value))
    }

    static PromiseMax(promises, max) {
        if(promises.length > max) throw new Error('长度超过最大限制')
        return new Promise((resolve, reject) => {
            let arr = []
            let idx = 0
            function process (index, data) {
                if(index < max) {
                    arr[index] = data
                    if(++idx === promises.length) {
                        resolve(arr)
                    }
                } else {
                    resolve(arr)
                }
            }
            for(let i = 0; i < promises.length; i++) {
                promises.then(res => process(i, res))
            }
        })
    }
}