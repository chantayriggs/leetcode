/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counts = new Map();

  for (let char of s) {
    const currentCount = counts.get(char) || 0;
    counts.set(char, currentCount + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (counts.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
