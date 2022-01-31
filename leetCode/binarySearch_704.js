let nums = [-1,0,3,5,9,12];
let target = 9;

var search = function(nums, target) {
    let length = nums.length;
    let left = 0;
    let right = length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] > target){
            right = mid-1;
        }else if(nums[mid] < target) {
            left = mid+1;
        }else{
            return mid
        }
    }
    return -1; 
}
console.log("111111111")
console.log(search(nums,target));