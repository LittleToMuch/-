function _new(fn, ...rest) {
    const obj = Object.create(fn.prototype)
    const res = fn.call(obj, ...rest)
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj
}

/*
    new操作符创建一个新对象
    因为新对象instanceof构造函数，所以新对象的__proto__指向构造函数的prototype
    所以采用 obj = Object.create(fn.prototype)  用法参照mdn
    构造函数内的this指向的是new出来的新对象，所以用call或者apply改变构造函数内的this，使其指向创造出来的新对象
    最后，关键的一步，new操作符的返回值
    如果构造函数没有返回值，那么隐式的返回this，也就是说是创造出来的新对象
    如果构造函数的返回值是引用类型，那么返回这个引用类型的返回值
    如果构造函数的返回值不是引用类型，那么依旧隐式返回this(创造出来的新对象)
*/