/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

1. The root is the maximum number in the array.
2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    /
     2  0
       \
        1

Note:
The size of the given array will be in the range [1,1000].
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

    if(nums.length === 0) {
        return null
    }

    let i = nums.indexOf(Math.max(...nums))

    let root = new TreeNode(nums[i])
    root.left = constructMaximumBinaryTree(Object.assign([], nums).splice(0, i))
    root.right = constructMaximumBinaryTree(Object.assign([], nums).splice(i + 1, nums.length - 1))

    return root
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

constructMaximumBinaryTree([3,2,1,6,0,5])
