/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0

  for(let i = 0; i < nums.length; i++) {
    //console.log(nums[i])
    if(nums[i] === nums[i + 1]) {
      //k++
      //console.log(nums[i], nums[i + 1])
      nums.splice(i + 1, 1)
     // console.log(nums)
      //console.log(k)
     // i++
      removeDuplicates(nums)
      k++
    }
    //console.log(k)
  }
    //console.log(nums)
  //  return nums
};
