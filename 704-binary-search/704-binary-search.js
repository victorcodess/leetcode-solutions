/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            result = i
        } else if(!nums.includes(target)){
            result = -1
        }
    }
    return result;
};