// 给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。
//设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。
// 注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。

// 双DFS，每个结点都调用一次DFS
var pathSum = function(root, sum) {

    let count = 0
    function travel(root,sum){
        if(!root) return 
        if(root.val === sum){
            count++
        }
        travel(root.left,sum-root.val)
        travel(root.right,sum-root.val)
    }
    function preOrder(root,sum){
        if(!root) return 
        travel(root,sum)
        preOrder(root.left,sum)
        preOrder(root.right,sum)
    }
    preOrder(root,sum)
    return count
};