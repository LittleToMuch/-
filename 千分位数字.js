function toThousands(num) {
    let numstr = num.toString()
    let result = ''
    while(numstr.length > 3) {
        result = ',' + numstr.slice(-3) + result
        numstr = numstr.slice(0, numstr.length - 3)
    }
    if(numstr) { result = numstr + result }
    return result
}

let number = 45
console.log(toThousands(number));

/**
 * 正则
 */
let number1 = `245`
let reg = /(?=(\B)(\d{3})+$)/g
console.log(number1.replace(reg, ','))

