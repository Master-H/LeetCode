
//题目： 链表中倒数第k个节点
//关键： head不存在，链表长度小于k导致程序崩溃的边界条件
// 栈方法
function getKthFromEnd(head,k) {
  let stacks = []
  let ans = []
  while(head){
    stacks.push(head)
    head = head.next
  }
  while(k>0){
    ans = stacks.pop()
    k--
  }
  return ans
  
}

// 链表方法, 倒数第k个，就是正数的第n-k+1,也就是正数走k次,可以画图
var getKthFromEnd = function (head, k) {
  let first = head
  let second = head
  if(!head) return null
  while( k >0){
    first = first.next
    k--
  }
  while(!first === null){
    first=first.next
    second=second.next
  }
  return second
};



