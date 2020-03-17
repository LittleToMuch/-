//递归
let result = []
function flattern (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattern(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result
}

//toString
function flattern (arr) {
    return arr.toString().split(',').map(item => +item)
}

//reduce
function flattern (arr) {
    return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flattern(next) : next), [])
}

// ...扩展运算符
function flattern (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}




