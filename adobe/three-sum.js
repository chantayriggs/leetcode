/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    const pinnedValue = nums[i];
    if (i !== 0 && nums[i - 1] === pinnedValue) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if (l === i) l++;
      if (r === i) r--;

      const leftElement = nums[l];
      const rightElement = nums[r];
      const sum = leftElement + rightElement + pinnedValue;

      if (sum === 0) {
        results.push([leftElement, pinnedValue, rightElement]);
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else {
        if (sum > 0) r--;
        if (sum < 0) l++;
      }
    }
  }

  return results;
};
