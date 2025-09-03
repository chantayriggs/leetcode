// pair, triplet, k-sum
// maximixe or minimize distance / area / difference
// interval / range merging
// array intersection / comparison problems
// greedy pairing / matching
// deduplication & compression
// closest value problems

const solveWithTwoPointers = (nums) => {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let best = 0;

  while (l < r) {
    const value = nums[l] + nums[r]; // or min/max depending on problem
    best = Math.max(best, value);

    if (/* condition to move left */) l++;
    else r--;
  }

  return best;
};
