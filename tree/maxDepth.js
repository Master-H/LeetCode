
// DFS深度遍历
function maxDepth(root) {
  if(!root) return 0
  return Math.max(maxDepth(root.left) + 1,maxDepth(root.right) + 1)
}

// BFS广度优先遍历
function maxDepth(root) {
  if(!root) return 0
  let stack = [root]
  let depth = 0
  while(stack.length){
    let temp = []
    depth++
    for(let i = 0; i < stack.length;i++){
      let left = stack[i].left
      let right = stack[i].right
      if(left) temp.push(left)
      if(right) temp.push(right)
    }
  
    stack = temp
  }
  return depth
}