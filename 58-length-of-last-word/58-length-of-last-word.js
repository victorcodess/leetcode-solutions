/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let strArr = s.replace(/\s+/g, " ").trim().split(" ")
    return strArr[strArr.length - 1].length
};