class Event {
    constructor() {
        this.handler = []
    }
    on(type, handler, once = false) {
        if(typeof handler !== 'function') {
            throw new Error('must be function')
        }
        if(!this.handler[type]) this.handler[type] = []
        if(!this.handler[type].includes(handler)) {
            this.handler[type].push(handler)
            if(once) {
                handler.once = true
            }
        }
    }

    trigger(type, evnetData = {}) {
        this.handler[type].forEach(fn => {
           fn.call(this, evnetData)
           if(fn.once) {
                this.off(type, fn)
           }
        })
    }

    off(type, handler) {
        if(!handler) {
            this.handler[type] = []
        }
        this.handler[type].filter(item => item !== handler)
    }

    once(type, handler) {
        this.on(type, handler, true)
    }


}