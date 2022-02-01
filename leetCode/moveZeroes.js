// for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0) {
//         let temp = nums.splice(i,1);
//         i--;
//         nums.push(temp);
//     }
// }
// return nums;
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0, right = 0, length = nums.length;

    while (right < length) {
        if(nums[right] !== 0) {
            let tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
        }
        right++;
    }
    return nums;
};