// 二叉搜索树的第k大节点
// 第k大的节点，显然就是逆中序遍历的第k个节点，即右->根->左的顺序遍历
var kthLargest = function(root, k) {
    let res = []
    function inOrderTravel(root){
        if(!root) return
        inOrderTravel(root.left)
        res.push(root.val)
        inOrderTravel(root.right)
    }
  inOrderTravel(root)
    return res.reverse()[k-1]
}