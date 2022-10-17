/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  strArr = s.split(" ");
  revStrArr = strArr.map(str => str.split("").reverse().join(""));
  return revStrArr.join(" ");
};