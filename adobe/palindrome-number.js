/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const array = String(x).split("");

  let isPalindrome = true;

  while (array.length > 1) {
    const front = array.shift();
    const back = array.pop();

    if (front !== back) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};
