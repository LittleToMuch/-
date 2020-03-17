let deepClone = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}

let deepClone2 = function(obj, map = new WeakMap()) {
    if(typeof obj === 'object') {
        let cloneObj = Array.isArray(obj) ? [] : {}
        if(map.get(obj)) {
            return map.get(obj)
        }
        map.set(obj, cloneObj)
        for(key in obj) {
            cloneObj[key] = deepClone(obj[key])
        }
        return cloneObj
    } else {
        return obj
    }
}

let deepClone3 = function (obj, map = new WeakMap()) {
    if(obj !== null && typeof obj === 'object') {
        if(map.get(obj)) {
            return map.get(obj)
        }
        map.set(obj, cloneData)
        let cloneData = Array.isArray(obj) ? [] : {}
        for(let key in obj) {
            cloneData[key] = deepClone3(obj[key])
        }
        return cloneData
    } else {
        return obj
    }
}

let deepClone4 = function (obj, map = new WeakMap()) {
    if(obj !== null && typeof obj === 'object') {
        if(map.get(obj)) {
            return map.get(obj)
        }
        map.set(obj, cloneData)
        let cloneData = Array.isArray(obj) ? [] : {}
        let keys = Object.keys(obj)
        for(key of keys) {
            cloneData[key] = deepClone4(obj[key])
        }
        return cloneData
    } else {
        return obj
    }
    
}

let deepClone5 = function(obj, map = new WeakMap()) {
    if(obj.constructor === Date) return new Date(obj)
    if(obj !== null && typeof obj === 'object') {
        let cloneData = Array.isArray(obj) ? [] : {}
        if(map.get(obj)) {
            return map.get(obj)
        }
        map.set(obj, cloneData)
        let keys = Object.keys(obj)
        for(key of keys) {
            cloneData[key] = deepClone5(obj[key])
        }
        return cloneData
    } else {
        return obj
    }
}

