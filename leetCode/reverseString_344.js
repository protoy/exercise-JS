/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // emmmmm
    // return s.reverse()
    let len = s.length;
    let temp = '';
    for(let i = 0; i < Math.floor(len / 2) ; i++) {
        temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
    return s;
};