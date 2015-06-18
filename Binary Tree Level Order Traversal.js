/**
 *  Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *  For example:
    Given binary tree {3,9,20,#,#,15,7},
     return its level order traversal as:
     [
         [3],
         [9,20],
         [15,7]
     ]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



var sort = function(treeNode, i, temp) {

    if(treeNode && treeNode.val !== null) {

        if(temp[i] === undefined) {
            temp[i] = [treeNode.val]
        } else {
            temp[i].push(treeNode.val)
        }

        if(treeNode.left !== null || treeNode.right !== null) {
            i += 1;
            sort(treeNode.left, i, temp);
            sort(treeNode.right, i, temp);
        }
    }
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];

    sort(root, 0, result);

    return result
};


function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var DUMMY = new TreeNode(1);
console.log(levelOrder(DUMMY));

DUMMY.left = new TreeNode(2);
DUMMY.right = new TreeNode(3);
console.log(levelOrder(DUMMY));

var DUMMY2 = new TreeNode(4);
DUMMY2.left = new TreeNode(6);
DUMMY2.right = new TreeNode(5);
DUMMY.right = DUMMY2;
console.log(levelOrder(DUMMY));




