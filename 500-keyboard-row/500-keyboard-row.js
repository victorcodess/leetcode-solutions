/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(word => (
        /\b[qwertyuiop]+\b/i.test(word) ||
        /\b[asdfghjkl]+\b/i.test(word) ||
        /\b[zxcvbnm]+\b/i.test(word)
    ));
};

