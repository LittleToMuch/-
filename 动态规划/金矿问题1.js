/*
    获得金矿最优收益
    @param  w   工人数量
    @param  n   可选金矿数量
    @param  p   金矿开采所需的工人数量
    @param  g   金矿储量
*/
let getBestGoldMining = (w, n, p, g) => {
  if (w === 0 || n === 0) {
    return 0;
  }
  if (w < p[n - 1]) {
    return getBestGoldMining(w, n - 1, p, g)
  }
  return Math.max(getBestGoldMining(w, n - 1, p, g), getBestGoldMining(w - p[n - 1], n - 1, p, g) + g[n - 1])
};

//测试用例
let w = 10
let p = [5, 5, 3, 4, 3]
let g = [400, 500, 200, 300, 350]
console.log("最优收益：" + getBestGoldMining(w, g.length, p, g));

