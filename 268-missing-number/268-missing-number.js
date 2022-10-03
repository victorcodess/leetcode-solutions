/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let expected = [];
  for(let i = 0; i <= nums.length; i++) {
    expected.push(i)
  }

  nums.sort((a, b) => a - b);

  for(let i = 0; i < expected.length; i++) {
    if(expected[i] !== nums[i]) {
      return expected[i]
    }
  }
};