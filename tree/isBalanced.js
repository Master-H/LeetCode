
// 利用后续遍历优化，判断
// 解题思路： 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 -1 。

// 遍历比较二叉树每个节点 的左右子树深度：

// 比较左右子树的深度，若差值大于 1 则返回一个标记 -1 ，表示当前子树不平衡
// 左右子树有一个不是平衡的，或左右子树差值大于 1 ，则二叉树不平衡
// 若左右子树平衡，返回当前树的深度（左右子树的深度最大值 +1 ）


function isBalanced(root) {
  return balanced(root) !== -1
}
function balanced(root) {
  if(!node) return 0
  const left = balanced(root.left)
  const right = balanced(root.right)
  if(left === -1 || right === -1 || Math.abs(left-right) >1){
    return -1
  }
  return Math.max(left,right) + 1
}
// 思路参考：https://leetcode-cn.com/problems/balanced-binary-tree/solution/javascriptping-heng-er-cha-shu-by-user7746o/