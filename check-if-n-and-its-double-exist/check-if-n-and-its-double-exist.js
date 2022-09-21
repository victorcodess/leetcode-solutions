/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    return arr.filter(e=> arr.includes(e*2))
};