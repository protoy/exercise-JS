/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = '';
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            temp = reverseWord(temp);
            res = res.concat(temp, ' ');
            temp = '';
            continue;
        } else if (i === s.length - 1) {
            temp = temp.concat(s[i]);
            temp = reverseWord(temp);
            res = res.concat(temp);
            temp = '';
        }
        temp = temp.concat(s[i]);
    }
    return res;
};

var reverseWord = (s) => {
    let arr = s.split('')
    let len = arr.length;
    let temp = '';
    for (let i = 0; i < Math.floor(len / 2); i++) {
        temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr.join('');
}
let s = "Let's take LeetCode contest"
console.log(reverseWords(s))