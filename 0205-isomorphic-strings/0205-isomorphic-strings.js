/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const createStringCode = (s) => {
    let map = new Map();
    let id = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], id);
            str = str + id + '.';
            id += 1;
        } else {
            const key = map.get(s[i]);
            str = str + key + '.';
        }
    }
    return str;
}

const isIsomorphic = (s, t) => {
    return createStringCode(s) === createStringCode(t);
};