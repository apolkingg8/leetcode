/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

For example, given array S = {-1 2 1 -4}, and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let _nums = nums.sort()
    let min = Infinity
    let res = null

    for(let i=0; i<_nums.length; i++) {
        let j = i + 1
        let k = _nums.length - 1

        while (j < k) {
            let sum = _nums[i] + _nums[j] + nums[k]
            let diff = Math.abs(i + j + k)

            if(diff < min) {
                min = diff
                res = sum
            } else if(sum < target) {
                j += 1
            } else {
                k -= 1
            }
        }
    }

    return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
console.log(threeSumClosest([1, 1, 1, 0], -100))
console.log(threeSumClosest([0, 2, 1, -3], 1))