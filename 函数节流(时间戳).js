const throttle = (fn, wait) => {
  let prev = 0;
  return (...args) => {
    let now = +new Date();
    if (now - prev > wait) {
      prev = now;
      fn.call(this, ...args);
    }
  };
};
