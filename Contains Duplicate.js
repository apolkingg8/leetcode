/*
 Given an array of integers, find if the array contains any duplicates.
 Your function should return true if any value appears at least twice in the array,
 and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*var containsDuplicate = function(nums) {
    var i = 0, n = nums.length, temp = []

    for(;i<n;i+=1) {
        if(temp.indexOf(nums[i]) > -1) {
            return true
        } else {
            temp.push(nums[i])
        }
    }

    return false
};*/
'use strict'
var containsDuplicate = function (nums) {
    var i = 0, n = nums.length;
    var set = new Set();

    for(;i<n;i++) {
        if(set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }

    return false;
};

var t1 = [1,2,3,4,5]
var t2 = [1,2,3,4,4,5]

console.log(containsDuplicate(t1))
console.log(containsDuplicate(t2))