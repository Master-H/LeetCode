
// 删除一个节点，时间复杂度为O（1）
// 思路，如果将前一个节点指向后一个节点那个时间复杂度为O(n),
// 如果直接将待删除节点的下一个节点的值赋予给待删除节点，然后删除这个下一个节点，不是就相当于删除了么
function deleteNode(headNode,deleteNode) {
  if(!headNode||!deleteNode) return
  // 删除头一个节点
  if(headNode === deleteNode) headNode = null
  // 删除尾节点
  if(deleteNode.next === null){
    let node = headNode;
    while(node.next !== deleteNode){
      node = node.next
    }
    node.next = null
    deleteNode = null
  }
  // 中间节点
  let deleteNext = deleteNode.next
  deleteNode.ele = deleteNext.ele
  deleteNode.next = deleteNext.next
  deleteNext = null

}