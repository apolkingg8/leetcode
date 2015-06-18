/*
 Invert a binary tree.

 Google: 90% of our engineers use the software you wrote (Homebrew),
 but you can’t invert a binary tree on a whiteboard so fuck off.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {TreeNode}
 */
var invertTree = function(tree) {

    if(tree) {
        var _temp = {}

        _temp = tree.left
        tree.left = tree.right
        tree.right = _temp

        invertTree(tree.left)
        invertTree(tree.right)
    }

    return tree
};






var TreeNode = function(val) {
    this.val = val
    this.left = null
    this.right = null
};

var theTree = new TreeNode(1)
var subTreeL = new TreeNode(2)
subTreeL.left = new TreeNode(4)
subTreeL.right = new TreeNode(5)
var subTreeR = new TreeNode(3)
subTreeR.left = new TreeNode(6)
subTreeR.right = new TreeNode(7)
theTree.left = subTreeL
theTree.right = subTreeR

console.log(invertTree(theTree))