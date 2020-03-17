let a = `asd ehe   rjr`

let reg = /\s+/g
let newStr = a.replace(reg, ',')
console.log(newStr);
console.log(newStr.split(',').join(""))
