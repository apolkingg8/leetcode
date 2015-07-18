/*
 Given an array of integers and an integer k,
 find out whether there there are two distinct indices i and j in the array such that nums[i] = nums[j]
 and the difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var set = new Set()
    var map = {}
    var i = 0, n = nums.length;

    for(;i<n;i++){
        var val = nums[i]

        if(set.has(val)) {
            //console.log(val, i, map[val])
            if((i-map[val]) <= k) {
                return true
            }
            map[val] = i
        } else {
            set.add(val)
            map[val] = i
        }
    }
    return false
};

//console.log(containsNearbyDuplicate([1,2,3,4,5,1,8,9,10,24,2], 4))
//console.log(containsNearbyDuplicate([-1, -1], 5))
console.log(containsNearbyDuplicate([1,0,1,1], 1))