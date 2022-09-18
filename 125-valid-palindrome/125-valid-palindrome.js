/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let x = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let y = x.split("").reverse().join("")
  return x === y ? true : false
};

