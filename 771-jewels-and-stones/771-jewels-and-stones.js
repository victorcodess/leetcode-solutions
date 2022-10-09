/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    jwlArr = jewels.split("");
    stnArr = stones.split("");
    
    let match = stnArr.filter(letter => jwlArr.includes(letter))
    return match.length;
};