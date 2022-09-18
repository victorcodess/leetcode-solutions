/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/gi, "").toLowerCase();

    let start =0;
    let end = s.length-1;
    while(start<=end) {
        if(s[start] != s[end])
            return false;
        else{
            start++;
            end--;
        }      
    }
    return true;
    
}