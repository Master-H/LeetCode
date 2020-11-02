//链表反转
// 思路： 定义两个指针，cur和pre,pre在前，cur在后
// 每次让cur.next指向pre实现局部反转，然后让pre和cur同时往后移一位
// 循环直到pre到达链表末尾

function reverseList(head) {
  let cur = head;
  let pre = null;
  let temp;

  while(cur){
    temp = cur.next;
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}