// subarrays / substrings where the window expands and shrinks

const slidingWindow = (arr, k) => {
  let l = 0
  let sum = 0
  let best = 0;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];
    while (/* invalid condition */) {
      sum -= arr[l];
      l++;
    }
    best = Math.max(best, r - l + 1); // or sum
  }
  return best;
};