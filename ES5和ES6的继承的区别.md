ES5/ES6 的继承除了写法以外还有什么区别？
    子类的__proto__指向不一样
    
    ES5 的子类和父类一样，都是先创建好，再实现继承的，刚开始创建的时候都是指向[Function]
    ES6 则不一样， 它指向父类， 子类是通过super来改造的

    ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面( Parent.apply(this) / child = Object.create(Parent.prototype) )
    ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

    tip: 
        1、class 声明会提升，但不会初始化赋值。
        2、class 声明内部会启用严格模式。
        3、class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
        4、class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
        5、必须使用 new 调用 class。
        6、class 内部无法重写类名。