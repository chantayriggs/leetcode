/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const next = prices[i];
    const prev = prices[i - 1];
    if (next > prev) {
      profit = profit + (next - prev);
    }
  }

  return profit;
};
