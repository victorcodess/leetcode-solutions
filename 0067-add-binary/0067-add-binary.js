/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let firstNum = BigInt(`0b${a}`);
    let secondNum = BigInt(`0b${b}`);
    let sum = firstNum + secondNum;
    return sum.toString(2);
    
    
};