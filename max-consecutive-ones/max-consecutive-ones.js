/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let count = 0;
 
    // initialize max
    let result = 0;
 
    for (let i = 0; i < nums.length; i++) {
        // Reset count when 0 is found
        if (nums[i] == 0)
            count = 0;
 
        // If 1 is found, increment
        // count and update result
        // if count becomes more.
        else {
            // increase count
            count++;
            result = Math.max(result, count);
        }
    }
    return result
};