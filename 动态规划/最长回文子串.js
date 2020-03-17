/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeV1 = function(s) {
  let res = "";
  let dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0));
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};


var longestPalindromeV2 = function(s) {
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }
  let str = "";
  for (let k = 0; k < s.length; k++) {
    for (let i = 0; i + k < s.length; i++) {
      let j = i + k;
      if (k === 0) {
        dp[i][j] = true;
      } else if (k <= 2) {
        if (s[i] === s[j]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1] ? true : false;
      }
      if (j - i + 1 >= str.length && dp[i][j]) {
        str = s.substring(i, j + 1);
      }
    }
  }
  return str;
};


//  中心扩展法
var longestPalindromeV3 = function(s) {
    if (!s || s.length < 2) return s
    let start = end = 0
    let n = s.length
    let centerExpend = (left, right) => {
        while(left >= 0 && right < n && s[left] === s[right]) {
            left--
            right++
        }
        return right - left - 1
    }
    for(let i = 0; i< n; i++) {
        let len1 = centerExpend(i, i)
        let len2 = centerExpend(i, i + 1)
        let maxLen = Math.max(len1, len2)
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1)/2)
            end = i + Math.floor(maxLen/2)
        }
    }
    return s.substring(start, end + 1)
}
