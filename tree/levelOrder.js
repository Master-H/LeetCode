var levelOrder = function(root) {
    let res = []
    if(!root) return res
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let levelList = []
        while(len){
            let node = queue.shift()
            levelList.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            len--
        }
        res.push(levelList)
       

    }
    return res
};
