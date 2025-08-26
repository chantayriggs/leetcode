// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique
// elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // pointer for unique elements
  for (let j = 0; j < nums.length - 1; j++) {
    const uniquePointer = nums[i];
    const next = nums[j + 1];
    if (uniquePointer !== next) {
      i++;
      nums[i] = next; // overwrite duplicate
    }
  }

  return i + 1; // length of unique elements
};
