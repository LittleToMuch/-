/*
    获得金矿最优收益
    @param  w   工人数量
    @param  p   金矿开采所需的工人数量
    @param  g   金矿储量
*/
let getBestGoldMiningV3 = (w, p, g) => {
  let result = new Array(w + 1);
  for (let i = 1; i <= g.length; i++) {
    for (let j = w; j >= 1; j--) {
      result[j] = Math.max(result[j], result[j - p[i - 1]] + g[i - 1]);
    }
  }
  return result[w]
};


//测试用例
let w = 10
let p = [5, 5, 3, 4, 3]
let g = [400, 500, 200, 300, 350]
console.log("最优收益：" + getBestGoldMiningV3(w, p, g));
