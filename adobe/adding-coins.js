/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (amount === 0) return 0;

  let queue = [[0, 0]];
  let visited = new Set([0]);

  while (queue.length > 0) {
    const [curr, steps] = queue.shift();

    for (let coin of coins) {
      const next = curr + coin;
      if (next === amount) return steps + 1;
      if (next < amount && !visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
};
