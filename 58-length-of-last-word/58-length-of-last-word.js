/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let trimedStr = s.trim();
  let strArr = trimedStr.split(" ")
  let lastWord = strArr.length - 1;  
    
    return strArr[lastWord].length
};