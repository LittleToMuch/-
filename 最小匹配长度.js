var minimumLengthEncoding = function(words) {
  let res = "";
  words.sort((a, b) => b.length - a.length);
  for (let i = 0; i < words.length; i++) {
    console.log('lopp', i);
    
    let index = res.indexOf(words[i])
    console.log(index);
    let symbol = res.substring(index + words[i].length, index + words[i].length + 1)
    console.log(symbol);
    if (index !== -1 && symbol === '#') {
      continue
    } else {
      res += words[i] + '#'
    }
  }
  return res.length
};




// 1、首先对给定的String数组进行排序，按照单词的长度降序排序。
// 2、假定字符串result是返回结果，初始化String res = ""。
// 3、遍历数组，比较每个单词是否能在res中表示。单词可以在res中表示的判断条件：res.indexOf(words[i])!= -1 &&
// res.substring(index + words[i].length(), index + words[i].length() + 1)
// 等于"#"。如果可以表示直接忽略，如果不能，则res += words[i] + "#"
// 4、返回res的长度。
