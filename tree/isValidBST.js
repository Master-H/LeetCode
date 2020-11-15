// 判断是否是合法二叉树
// 思路，二叉树中序是升序
var isValidBST = function(root) {
    let result = true
    let preVal = -Infinity;
    function DFS(root) {
        if (!result || !root) return;
        DFS(root.left);
        if (root.val <= preVal) result = false;
        preVal = root.val;
        DFS(root.right);
    }
    DFS(root);
    return result;


};