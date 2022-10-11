/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */


var shortestToChar = function(s, c) {
    let n = s.length;
    let res = [];
        
    let prev = Infinity;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) prev = i;
        res[i] = Math.abs(prev - i);
    }

    prev = Infinity;

    for (let i = n - 1; i >= 0; i--) {
      if (s[i] === c) prev = i;
      res[i] = Math.min(res[i], prev - i);
    }

    return res;
}