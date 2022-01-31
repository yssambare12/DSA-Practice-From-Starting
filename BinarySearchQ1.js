// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function(nums, target) {
    var start = 0; 
    var end = nums.length - 1;
    
    while (start <= end){
        var mid = ~~((start+end)/2);
        if (nums[mid] === target){
            return mid;
        }
        
        if (nums[mid] < target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    return start;
};   
}



// another solution


var searchInsert = function(nums, target) {
    var start = 0; 
    var end = nums.length - 1;
    var mid;
    
    while (start <= end){
        mid = ~~((start+end)/2);
        if (nums[mid] === target)
            return mid;
        
        if (nums[mid] > target)
            end = mid - 1;
         else 
            start = mid + 1;
        }
    return start;
};
