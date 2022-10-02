/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let ss = s.split("").sort()
  let tt = t.split("").sort()

  if(ss.length !== tt.length) {
    return false
  }
    
  for(let i = 0; i < ss.length; i++) {
    if(ss[i] !== tt[i]) {
      return false
    }
  }
    
  return true
};