// DFS加回溯
var binaryTreePaths = function(root) {
    let paths = []
  
    function travel(root,path=[]){
        if(!root) return
        path.push(root.val)
        if(root.left) travel(root.left,path)
        if(root.right)travel(root.right,path)
        if(!root.left && !root.right){
            paths.push(path.join('->'))
        }
        path.pop()
    }
    travel(root)
    return paths
};