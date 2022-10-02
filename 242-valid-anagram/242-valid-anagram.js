/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ss = s.split("").sort()
    let tt = t.split("").sort()
    
  return ss.join("") === tt.join("")
};