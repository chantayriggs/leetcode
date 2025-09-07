/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minSeenSoFar = Infinity;
  let bestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const todaysPrice = prices[i];
    minSeenSoFar = Math.min(todaysPrice, minSeenSoFar);

    const todaysProfit = todaysPrice - minSeenSoFar;
    bestProfit = Math.max(todaysProfit, bestProfit);
  }

  return bestProfit;
};
