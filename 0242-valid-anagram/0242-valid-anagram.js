/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ss = s.split("").sort() // O(Nlog(N))
    let tt = t.split("").sort() // O(Nlog(N))

  for(let i = 0; i < ss.length; i++) { // O(N)
    if(ss[i] !== tt[i] || ss.length !== tt.length) {
      return false
    }
  }
  return true
};

// Total Time O(Nlog(N))
// Total Space O(N)