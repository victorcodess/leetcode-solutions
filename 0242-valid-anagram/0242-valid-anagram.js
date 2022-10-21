/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ss = s.split("").sort().join("")
    let tt = t.split("").sort().join("")

 // for(let i = 0; i < ss.length; i++) {
    if(ss !== tt || ss.length !== tt.length) {
      return false
    }
  // }
  return true
};