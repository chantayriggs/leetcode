/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const totalLength = nums1.length + nums2.length;
  const mergedArray = [];

  while (nums1.length || nums2.length) {
    if (!nums1.length) {
      mergedArray.push(...nums2);
      break;
    }
    if (!nums2.length) {
      mergedArray.push(...nums1);
      break;
    }

    const firstNum1 = nums1[0];
    const firstNum2 = nums2[0];

    if (firstNum1 <= firstNum2) {
      mergedArray.push(nums1.shift());
    } else {
      mergedArray.push(nums2.shift());
    }
  }

  const mid = Math.floor(totalLength / 2);
  if (totalLength % 2 === 1) return mergedArray[mid];
  return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
