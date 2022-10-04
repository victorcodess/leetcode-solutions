/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ss = s.split("").sort();
    let tt = t.split("").sort();
  
  for(let i = 0; i < tt.length; i++) {
    if(tt[i] !== ss[i]) {
      return tt[i];
    }
  }
};