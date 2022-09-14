/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    let numsLength = nums.map(num => Math.floor(Math.log10(num) + 1))
    for(let i = 0; i < numsLength.length; i++){
        if(numsLength[i] % 2 == 0) {
        result++;
        }
    }
    return result;
};