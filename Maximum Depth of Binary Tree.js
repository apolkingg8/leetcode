/*
 Given a binary tree, find its maximum depth.

 The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root) {
        var pool = []
        deepFind(root, 1, pool)
        return Math.max.apply(null, pool)
    } else {
        return 0
    }
};

var deepFind = function(node, d, arr) {

    if((node.right === null) && (node.left === null)) {
        arr.push(d)
    } else {
        d++
        node.left ? deepFind(node.left, d, arr) :'';
        node.right ? deepFind(node.right, d, arr) :'';
    }
}

var t = new TreeNode(0)
t.left = new TreeNode(1)
var tt = new TreeNode(2)
t.left.left = tt

console.log(maxDepth(t))