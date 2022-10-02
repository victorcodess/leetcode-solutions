/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ss = s.split("").sort()
    let tt = t.split("").sort()

  for(let i = 0; i < ss.length; i++) {
    if(ss[i] !== tt[i] || ss.length !== tt.length) {
      return false
    }
  }
  return true
};