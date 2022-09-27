/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = [];
  let expectedArr = []
  nums.sort((a, b) => a - b)
  for(let i = 1; i <= nums.length; i++) {
    expectedArr.push(i)
    //result.push(nums[i]);
  }
  let disArr = [...new Set(nums)]
  //console.log(disArr)
  //console.log(expectedArr)
  for(let j = 0; j < expectedArr.length; j++) {
    if(!disArr.includes(expectedArr[j])) {
      result.push(expectedArr[j])
    }
  }
    return result
};