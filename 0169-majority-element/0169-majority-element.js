/**
 * @param {number[]} nums
 * @return {number}
 */
const getCounts = (nums) => {
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let val = counts[nums[i]] ? counts[nums[i]] : 0;
        counts[nums[i]] = val + 1;
    }
    return counts;
} 

var majorityElement = function(nums) {
    const n = nums.length;
    const counts = getCounts(nums);
    const isMajority = (val) => (val) > (n / 2);
    
    for (const [key, val] of Object.entries(counts)) {
        if (isMajority(val)) {
            return key;
        }
    }
    return 0;
};