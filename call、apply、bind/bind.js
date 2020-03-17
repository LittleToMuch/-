Function.prototype._bind = function(obj) {
    if(typeof this !== 'function') {
        throw new Error(`${this} is not a function`)
    }
    let _this = this
    let args = [...arguments].slice(1)
    let bound = function () {
        let _args = [...arguments]
        return _this.apply(this instanceof bound ? this : (obj || window), [...args, ..._args])
    }
    bound.prototype = Object.create(_this.prototype)
    return bound
}


function Animal(name, color) {
    this.name = name;
    this.color = color;
}
Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal._bind(null, 'cat');
const cat = new Cat('white');
if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal) {
    console.log('success');
}