### 如何让const声明的对象的属性也不可修改？
使用 Object.defineProperty ，把writeable和configuable都设置为false , configuable为false的情况下， writeable为true，是可以修改为false的，但是 writeable为false，是不可以修改为true的
Object.freeze()

### flex: 1 展开的具体的三个值是什么？
flex是 flex-grow、flex-shrink、flex-basis的缩写，默认值是 0 1 auto  

### webpack 构建流程
Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。

### 浏览器缓存(强制缓存和协商缓存)
1. 浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识
2. 浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中

当浏览器向服务器发起请求时，服务器会将缓存规则放入HTTP响应报文的HTTP头中和请求结果一起返回给浏览器，
1. 控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。
2. 控制协商缓存的字段分别有：Last-Modified / If-Modified-Since和Etag / If-None-Match，其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高。

Cache-Control : public private no-cache no-store max-age

from memory cache代表使用内存中的缓存，from disk cache则代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为memory –> disk。
样式表一般在磁盘中，不会缓存到内存中去，因为CSS样式加载一次即可渲染出网页。

在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。

强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存

nocache 不走强制缓存，只走协商缓存
nostore 缓存都不走，干净利索拿源文件

### ES5/ES6 的继承除了写法以外还有什么区别？
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

### vue-router的实现原理
原理核心就是 更新视图但不重新请求页面
vue-router实现单页面路由跳转，提供了三种方式：hash模式、history模式、abstract模式，根据mode参数来决定采用哪一种方式

加入"mode: 'history'",这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
如果后端没有对应的路由处理，就会返回404错误；
为了应对这种情况，需要后台配置支持：
在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

### vue.use()
有install方法，那么就要使用Vue.use去初始化这个插件
如果封装的插件是靠这个对象去调用方法，比如axios，那么直接用的就是export default暴露出一个对象，那么就不需要使用Vue.use。
两者刚好让我们知道，如果一个插件是必须全部引入，那么使用暴露一整个对象，使用exportdefault或者是暴露一个用install的对象使用Vue.use。而像UI库那么庞大的插件，我们一般按需引入，那么就使用一个一个export的方法，使用花括号{}按需引入。

Vue.use(plugins：object || function,args)的第一个参数是对象或者方法，如果是对象，就执行对象中的install方法，否则就直接执行传入方法。plugins的第一个参数是当前的Vue实例，其余参数是传入的args

vue首先判断这个插件是否被注册过，不允许重复注册

### http2和http1.x区别
http2多路复用，多个请求在一个链接上，每个请求都有一个id，在连接中这些请求是混乱的，服务端拿到请求以后，根据id分发到不同的服务器处理，解决了http1.x的对头阻塞，请求还可以设置优先级
http2服务端推送，请求一个html页面，同时把js css都返回到客户端，省去了发请求建立连接的过程
http2的二进制格式，二进制分帧层
http2的header压缩
http1.x  同一个域名的请求有最大并发限制，  http采用多路复用，没有这个困扰
### tcp如何实现数据的可靠性传输(流量控制，拥塞控制)




