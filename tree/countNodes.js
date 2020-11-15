// 给出一个完全二叉树，求出该树的节点个数。

//说明：

//完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。
// 参考：https://leetcode-cn.com/problems/count-complete-tree-nodes/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-47/
var countNodes = function(root) {
    if (!root) return 0;
    let left = height(root.left);
    let right = height(root.right);
    if (left === right) {
        return countNodes(root.right) + (1 << left); // 左右高度相等，左子树为满二叉树，节点数量为2^h - 1，加上根节点为2^h，再递归右子树
    } else {
        return countNodes(root.left) + (1 << right); // 高度不相等，右子树为满二叉树
    }
};

function height(root) {
    return !root ? 0 : 1 + height(root.left);
}

// 非优化的方法
var countNodes = function(root) {
    let dfs = (node, res)=>{
        if(node!=null){
            dfs(node.left, res)
            res.push(node. val)
            dfs(node.right, res)
        }
    }
    let res = []
    dfs(root, res)
    return res.length
};

