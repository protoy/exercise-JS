/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-4,-1,0,3,10]
 var sortedSquares = function(nums) {
    nums = nums.map(item=>{console.log(item);return item*item;});
    nums.sort((a,b)=>a-b);
    return nums
};
console.log(sortedSquares(nums))