/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let cursor2 = num2.length - 1;

    const plusString = (short, long) => {
        const output = new Array(long.length + 1);
        let cursorShort = short.length - 1;
        let bonus = 0;

        for (let i = long.length - 1; i >= 0; i--) {
            const sum = Number(long[i]) + (cursorShort >= 0 ? Number(short[cursorShort]) : 0) + bonus;
            bonus = sum >= 10 ? 1 : 0;
            output[i+1] = sum >= 10 ? (sum%10) : sum;
            cursorShort--;
        }
        if (bonus) output[0] = 1;

        return output;
    }
    const output = plusString(num2.length >= num1.length ? num1 : num2, num2.length >= num1.length ? num2 : num1);
    
    return output.join('');
};