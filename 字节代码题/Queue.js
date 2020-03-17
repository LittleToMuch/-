// 实现一个Queue类，要求包含两个函数
// task函数：新增一个任务。包含两个参数，等待时间和回调函数
// start函数：执行任务队列。将所有任务按队列顺序执行，执行完一个任务才能执行下一个任务

class Queue {
  constructor() {
    this.handler = [];
  }

  task(time, fn) {
    let cb = () => {
      setTimeout(() => {
        fn();
      }, time);
    };
    this.handler.push(cb);
    return this
  }

  start() {
      this.handler.forEach((item) => {
        item()
      })
  }
}


new Queue()
.task(1000, () => {
  console.log(1)
})
.task(2000, () => {
  console.log(2)
})
.task(1000, () => {
  console.log(3)
})
.start()
