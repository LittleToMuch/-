// 实现一个继承，实现Dog类继承Animal类

function Animal(name, age) {
    this.name = name
    this.age = age
}

function Dog(name, age, sex) {
    Animal.call(this, name, age)
    this.sex = sex
}

Dog.prototype = Object.create(Animal.prototype)

