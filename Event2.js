class Event {
    constructor() {
        this.handler = {}
    }
    
    on(type, handler, once = false) {
        if(!(handler instanceof Function)) {
            throw Errow('-----')
        }
        if(!this.handler[type]) {
            this.handler[type] = []
        }
        if(!this.handler[type].includes(handler)) {
            this.handler[type].push(handler)
            if(once) {
                handler.once = true
            }
        }
    }

    off(type, handler) {
        if(!handler) {
            this.handler[type] = []
        }
        this.handler[type] = this.handler[type].filter(fn => fn !== handler)
    }

    trigger(type, eventData = {}) {
        this.handler[type].forEach(fn => {
            fn.call(this, eventData)
            if(fn.once) {
                this.off(type, fn)
            }
        })
    }

    once(type, handler) {
        this.on(type, handler, true)
    }
}