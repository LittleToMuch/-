const debounce = (fn, wait) => {
  let timerId;
  return (...args) => {
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
        fn.call(this, ...args)
    }, wait);
  };
};
