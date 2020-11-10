// 特定深度节点链表
// 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

// 给定一个二叉树，要求返回一个ListNode[]
// ListNode[]中每个节点i代表二叉树中第i层从左到右所有节点构成的链表
// 思路： 遍历过程中对每层节点创建一个ListNode链表，并将头节点放入返回参数ListNode[]中var listOfDepth = function(tree) {

  var listOfDepth = function(tree) {
    if(!tree) return []
    let res = []
    let queue = [tree]
    let len =  queue.length
    
    while(len ){
      let root = new ListNode()
      let head = root;
      while(len--){
        const front = queue.shift()
        if(!front) continue
        head.next = new ListNode(front.val)
        head = head.next
        queue.push(front.left,front.right)
      }
      len = queue.length
      root.next && res.push(root.next)
    }
    return res
  };

  var listOfDepth = function(tree) {
    if(!tree) return []
    let res = []
    let queue = [tree]
    let len =  queue.length
    
    while(len ){
      let root = new ListNode()
      let head = root;
      for(let i = 0 ; i < len ;i++){
        const front = queue.shift()
        if(!front) continue
        head.next = new ListNode(front.val)
        head = head.next
        queue.push(front.left,front.right)
      }
      len = queue.length
      root.next && res.push(root.next)
    }
    return res
  };
