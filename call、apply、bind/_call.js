Function.prototype._call = function(obj) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  const args = [...arguments].slice(1);
  const fn = Symbol("fn");
  obj[fn] = this;
  const result = obj[fn](...args);
  delete obj[fn];
  return result;
};
