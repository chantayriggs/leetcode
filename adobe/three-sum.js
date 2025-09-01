const twoSumSorted = (nums, start, target) => {
  const pairs = [];
  let l = start,
    r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < target) l++;
    else if (sum > target) r--;
    else {
      pairs.push([nums[l], nums[r]]);
      const leftVal = nums[l],
        rightVal = nums[r];
      while (l < r && nums[l] === leftVal) l++;
      while (l < r && nums[r] === rightVal) r--;
    }
  }
  return pairs;
};

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = -nums[i];
    const pairs = twoSumSorted(nums, i + 1, target);

    for (const [a, b] of pairs) {
      res.push([nums[i], a, b]);
    }
  }
  return res;
};
