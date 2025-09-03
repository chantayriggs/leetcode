// when a problem needs to be broken into subproblems, and the subproblems are overlapping

const dp = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // recurrence
  }
  return dp[n];
};
