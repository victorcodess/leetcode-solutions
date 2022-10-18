/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
}