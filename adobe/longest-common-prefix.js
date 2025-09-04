/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";

  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    const currentChar = firstWord[i];
    for (let j = 1; j < strs.length; j++) {
      const reachedEndOfWord = i === strs[j].length;
      const charsDontMatch = strs[j][i] !== currentChar;
      if (reachedEndOfWord || charsDontMatch) {
        return firstWord.slice(0, i);
      }
    }
  }
  return strs[0];
};
