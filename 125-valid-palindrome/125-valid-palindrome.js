/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
let newString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
if (newString === newString.split("").reverse().join("")) {
return true;
} else {
return false;
}
};

isPalindrome(" ")