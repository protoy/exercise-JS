/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let length = numbers.length;
    let result = [];
    for (let i = 0; i < length; i++) {
        result[0] = i + 1;
        console.log('now the i is :', i)
        let left = i, right = length - 1;
        while (left <= right) {
            console.log("left:", left, "-----right:", right);
            let mid = Math.floor((right - left) / 2 + left);
            if (right - left === 1) { mid = right; }
            if (numbers[mid] > target - numbers[i]) {
                right = mid - 1;
            } else if (numbers[mid] < target - numbers[i]) {
                left = mid + 1;
            } else {
                console.log(mid)
                result[1] = mid + 1;
                return result;
            }
        }
        console.log('--------------')
    }
};
let numbers = [1, 2, 3, 4, 4, 9, 56, 90];
let target = 8;
console.log(twoSum(numbers, target))