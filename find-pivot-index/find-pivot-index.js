/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) { 
    let totalSum = 0;
    nums.forEach(item =>{
        totalSum += item;
    })
    
    let leftSum = 0
    
    for(let i = 0; i < nums.length; i++) {
        let rigthSum = totalSum - leftSum - nums[i];
        if(leftSum === rigthSum ) {
        return i
        }
        leftSum += nums[i]
    }
    return -1
};