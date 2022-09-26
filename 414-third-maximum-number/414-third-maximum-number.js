/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let disMax;
  let sortedArr = [...new Set(nums)].sort((a, b) => a - b)
  let last = sortedArr.length - 1
  if(sortedArr.length < 3) {
   disMax = sortedArr[last]
  } else {
    disMax = sortedArr[sortedArr.length - 3]
  }
   return disMax 
};