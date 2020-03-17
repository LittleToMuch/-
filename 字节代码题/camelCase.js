// TODO: 输入 'ab-cd-ef', 输出 'abCdEf'
function camelcase(str) {
    let strArr = str.split('')
    for(let i = 0; i < strArr.length - 1; i++) {
        if(strArr[i] === '-') {
            strArr[i+1] = strArr[i+1].toUpperCase()
            strArr.splice(i, 1)
            i--
        }
    }
    return strArr.join("")
}
console.log(camelcase('ab-cd-ef'));

let reg = /-([a-z])/g
let srt = 'ab-cd-ef'
let str = srt.replace(reg, (child, cap, offset) => {
    return cap.toUpperCase()
})
console.log(str);



