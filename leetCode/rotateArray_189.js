/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}
var rotate = function (nums, k) {

    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    //超时，unshift放法会移动整个数组
    // for (let i = 0; i < k; i++) {
    //     let temp = nums.pop();
    //     nums.unshift(temp);
    // }
    // return nums;
};