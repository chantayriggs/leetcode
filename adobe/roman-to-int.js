/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const value = valueMap[s[i]];
    if ([1, 10, 100].includes(value)) {
      const nextValue = valueMap[s[i + 1]];
      if (nextValue > value) {
        total -= value;
      } else {
        total += value;
      }
    } else {
      total += value;
    }
  }

  return total;
};
