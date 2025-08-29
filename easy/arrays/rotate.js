/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  if (k === 0 || n <= 1) return;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  function reverse(a, l, r) {
    while (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      l++;
      r--;
    }
  }
};
