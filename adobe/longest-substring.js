/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let best = 0;
  const set = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    while (set.has(currentChar)) {
      set.delete(s[left]);
      left++;
    }

    set.add(currentChar);
    const currentLength = right - left + 1;
    best = Math.max(best, currentLength);
  }

  return best;
};
