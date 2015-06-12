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
    if(treeNode
        && (treeNode.left != null || treeNode.right != null)
    ) {
        if(treeNode.left)
            sort(treeNode.left, i++, temp);
        if(treeNode.right)
            sort(treeNode.right, i++, temp);
        
    } else if(treeNode) {
        if(temp[i] === undefined) {
            temp[i] = [treeNode.val]
        } else {
            temp[i].push(treeNode.val)
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
DUMMY.left = new TreeNode(2);

console.log(levelOrder(DUMMY));

/*var levelOrder = function(A) {
    var j = 1,
        k = 0;

    var B = [];

    if(A) {
        while (j <= A.length) {
            B[k] = A.splice(0, j).filter(function (val) {
                return val !== '#'
            });
            j = j * 2;
            k = k + 1
        }
    }

    return B;
};

console.log(levelOrder([1]));*/