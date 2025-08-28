/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length - 1;
  for (let i = 0; i < length / 2; i++) {
    const indexToSwitch = length - i;
    const temp = s[i];
    s[i] = s[indexToSwitch];
    s[indexToSwitch] = temp;
  }
};
