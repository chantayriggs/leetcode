/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complementToCurrentNum = target - currentNum;

    if (map.has(complementToCurrentNum)) {
      const complement = map.get(complementToCurrentNum);
      return [complement, i];
    } else {
      map.set(currentNum, i);
    }
  }
};
