/*
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = {}

    for(var i = 0; i < nums.length; i++) {
        if(count[nums[i]] === undefined) {
            count[nums[i]] = 1
        } else {
            count[nums[i]] ++
        }
    }

    for(var key in count) {
        if(count[key] > (nums.length / 2)) return parseInt(key)
    }
};

console.log(majorityElement([1,1,2]))