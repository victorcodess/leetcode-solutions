/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let length = arr.length - 1;
    let max = arr[length];
    
    for (let i = length - 1; i >= 0; i--) {
        let cur = arr[i];
        arr[i] = max;
        max = max > cur ? max : cur;
    };
    arr[length] = -1;
    return arr;
};