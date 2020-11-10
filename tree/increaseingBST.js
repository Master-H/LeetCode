// 给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
// 思路：先中序遍历得到数组，然后重新构建数

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var increasingBST = function(root) {
    let queue = []
    if(!root) return queue
    function inOrderTravel(root){
        if(!root) return
        inOrderTravel(root.left)
        queue.push(root.val)
        inOrderTravel(root.right)
    }
    inOrderTravel(root)
    let head = new TreeNode(queue.shift());
    let temp = head 
    while(queue.length){
        temp.right = new TreeNode(queue.shift())
        temp = temp.right
    }
    return head

}