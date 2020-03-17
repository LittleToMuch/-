// 防抖
function debounce(fn, delay) {
    let timerId
    return (...args) => {
        timerId && clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

//节流
function throttle(fn, delay) {
    let timerId
    return (...args) => {
        if(!timerId) {
            timerId = setTimeout(() => {
                timerId = null
                fn.apply(this, args)
            }, delay)
        }
    }
}

function throttle2(fn, delay) {
    let prevouis = 0
    return (...args) => {
        let now = Date.now()
        if(now - prevouis >= delay) {
            prevouis = now
            fn.apply(this, args)
        }
    }
}

function a() {
    console.log(arguments);
    
}

a(1,2,3,4,5)