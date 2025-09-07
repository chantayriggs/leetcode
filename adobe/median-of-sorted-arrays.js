/**
 * Find the median of two sorted arrays by merging them.
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} The median of the two arrays
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const totalLength = nums1.length + nums2.length;
  const merged = [];

  let index1 = 0; // pointer for nums1
  let index2 = 0; // pointer for nums2

  // Merge until one array runs out
  while (index1 < nums1.length && index2 < nums2.length) {
    const value1 = nums1[index1];
    const value2 = nums2[index2];

    if (value1 < value2) {
      merged.push(value1);
      index1 = index1 + 1;
    } else {
      merged.push(value2);
      index2 = index2 + 1;
    }
  }

  // Add remaining values from nums1
  while (index1 < nums1.length) {
    const value1 = nums1[index1];
    merged.push(value1);
    index1 = index1 + 1;
  }

  // Add remaining values from nums2
  while (index2 < nums2.length) {
    const value2 = nums2[index2];
    merged.push(value2);
    index2 = index2 + 1;
  }

  // Find the median
  const mid = Math.floor(totalLength / 2);

  if (totalLength % 2 === 1) {
    // Odd length → the single middle element
    return merged[mid];
  } else {
    // Even length → the average of the two middle elements
    const leftMiddle = merged[mid - 1];
    const rightMiddle = merged[mid];
    return (leftMiddle + rightMiddle) / 2;
  }
};
