// 23:59
// 02:07
let reg = /^0?\d|1\d|2[0-3]:0?\d|[1-5]\d$/
console.log( reg.test("23:59") ); 
console.log( reg.test("02:07") ); 
console.log( reg.test("7:9") ); 


// 2017-06-10
let reg2 = /^0?\d{3}|[1-9]\d{3}-0[1-9]|1[0-2]-0[1-9]|[1-2]\d|3[0-1]$/
console.log(reg2.test('2017-06-10'))

//<div id="container" class="main"></div> 提取出id="container"

let reg3 = /id="[^"]*"/
let string = '<div id="container" class="main"></div>'
console.log(string.match(reg3)[0])


// 数字千分符 12,345,678
let reg4 = /(?!^)(?=(\d{3})+$)/g
var string1 = "12345678",string2 = "123456789";
var result = string1.replace(reg4, ',')
console.log(result); 
result = string2.replace(reg4, ',');
console.log(result); 

// 驼峰字串转下划线 abcBbCc -> abc_bb_cc

let reg5 = /([A-Z])/g
let string3 = 'abcBbCc'
var result = string3.replace(reg5, (match) => {
    return '_' + match.toLowerCase()
})
console.log(result)

// 下划线转驼峰字符串 abc_bb_cc -> abcBbCc

let reg6 = /(_[a-z])/g
let string4 = 'abc_bb_cc'
var result = string4.replace(reg6, (match) => {
    return match.substring(1).toUpperCase()
})
console.log(result)

// trim方法模拟

let reg7 = /^\s+|\s+$/g
let string5 = '  foobar   '
var result = string5.replace(reg7, '')
console.log(result)

// 将每个单词的首字母大写

let reg8 = /(^|\s)\w/g
let string6 = 'my name is epeli'
var result = string6.replace(reg8, (match, v1) => {
    return match.toUpperCase()
})
console.log(result)