/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let trimedStr = s.replace(/\s+/g, " ").trim();
  let strArr = trimedStr.split(" ")
  let lastWord = strArr.length - 1;  
    
    return strArr[lastWord].length
};