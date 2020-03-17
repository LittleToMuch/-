/*
    获得金矿最优收益
    @param  w   工人数量
    @param  p   金矿开采所需的工人数量
    @param  g   金矿储量
*/
let getBestGoldMining = (w, p, g) => {
  let resultTable = new Array(g.length + 1).fill(0);
  for (let i = 0; i < resultTable.length; i++) {
    resultTable[i] = new Array(w + 1).fill(0);
  }
  for (let i = 1; i <= g.length; i++) {
    for (let j = 1; j <= w; j++) {
      if (j < p[i - 1]) {
        resultTable[i][j] = resultTable[i - 1][j];
      } else {
        resultTable[i][j] = Math.max(
          resultTable[i - 1][j],
          resultTable[i - 1][j - p[i - 1]] + g[i - 1]
        );
      }
    }
  }
  return resultTable[g.length][w]
};

//测试用例
let w = 10
let p = [5, 5, 3, 4, 3]
let g = [400, 500, 200, 300, 350]
console.log("最优收益：" + getBestGoldMining(w, p, g));
