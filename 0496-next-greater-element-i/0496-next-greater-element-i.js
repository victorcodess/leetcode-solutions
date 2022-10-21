/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let out = []
    for (let i of nums1) {
        let x = -1
        for (let j = nums2.length-1; nums2[j]!=i; j--) {
            if (nums2[j] > i) x = nums2[j] 
        }
        out.push(x)
    }
    return out
};