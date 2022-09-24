/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  nums.sort((a, b) => (a % 2) - (b % 2))
  return nums
};