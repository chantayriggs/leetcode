// recursive problems where subproblems are repeated

const memo = {};
const topDown = (n) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = topDown(n - 1) + topDown(n - 2));
};
