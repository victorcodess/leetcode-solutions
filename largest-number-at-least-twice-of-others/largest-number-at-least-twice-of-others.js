/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNum = Math.max(...nums);
    let maxNumIndex = nums.indexOf(maxNum);
  
  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] > nums[i +]) {
  //     maxNum = nums[i + 1]
  //     maxNumIndex = i + 1
  //   }
  // }



  for(let i = 0; i < nums.length; i++) {
    if(maxNum < nums[i] * 2 && maxNum !== nums[i]) {
      //console.log(nums[i])
      maxNumIndex = -1
    }
      //return maxNumIndex
    
  }
  
  return maxNumIndex
};
