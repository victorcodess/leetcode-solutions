/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    var stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(getEquivalentClosingBracket(ch));
        } else if (stack.length === 0 || stack.pop() !== ch) {
            return false;
        }
    }
    return stack.length === 0;
};

function getEquivalentClosingBracket(ch) {
    if (ch === '(') {
        return ')';
    }
    if (ch === '[') {
        return ']';
    }
    return '}';
}