/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let evenNumMap = new Map()
    let max = 0
	
    for (let num of nums) {
        if (!evenNumMap.has(num) && num % 2 === 0) {
            evenNumMap.set(num, 1)
        } else if (evenNumMap.has(num) && num % 2 === 0) {
            evenNumMap.set(num, evenNumMap.get(num) + 1)
        }

        if (evenNumMap.get(num) > max) max = evenNumMap.get(num)
    }

    let smallestMaxKey = Infinity
	
    for (let [num, count] of evenNumMap) {
        if (count === max && num < smallestMaxKey) smallestMaxKey = num
    }

    return smallestMaxKey === Infinity ? -1 : smallestMaxKey
};