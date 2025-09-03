// Use for problems with on/off states, subsets, XOR tricks

const singleNumber = (nums) => nums.reduce((a, b) => a ^ b, 0);

const generateSubsets = (arr) => {
  const res = [];
  for (let mask = 0; mask < 1 << arr.length; mask++) {
    const subset = [];
    for (let i = 0; i < arr.length; i++) {
      if (mask & (1 << i)) subset.push(arr[i]);
    }
    res.push(subset);
  }
  return res;
};
