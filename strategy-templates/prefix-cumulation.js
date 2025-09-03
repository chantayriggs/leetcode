// Use when summing subarrays repeatedly

const prefixSum = (arr) => {
  const pre = Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    pre[i + 1] = pre[i] + arr[i];
  }
  return pre;
};
