/*
 * @Author: your name
 * @Date: 2020-12-13 22:33:01
 * @LastEditTime: 2020-12-13 23:20:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/fe/leetcode-js/link/删除和0连续节点-removeZeroSumSublists.js
 */
var removeZeroSumSublists = function(head) {
    while(!head) return null
    let map = new Map()
    let dummyHead = new ListNode(null)
    dummyHead.next = head
    let node = dummyHead.next
    let sum = 0 
    while(node){
        sum += node.val
        map[sum] = node  // 相加后连续的值直接覆盖
        node = node.next
    }
    sum = 0 
    node = dummyHead.next
    while(node ){
        sum += node.val
        node.next = map[sum].next
        node = node.next
    }
    return dummyHead.next
};
var removeZeroSumSublists = function(head) {
    let newList = new ListNode(null);
    newList.next = head;
    let sum = 0;
    let map = {};
    
    // 1. 存储前缀和 => 节点的映射
    for (let node = newList; node != null; node = node.next) {
      sum += node.val;
      map[sum] = node; // 多个相同的前缀和，反复覆盖即可，说明是有更长的和为 0 的区间
    }
    
    // 2. 如果两个节点的前缀和一样，那么说明中间都是无效节点，直接删除即可
    sum = 0;
    for (let node = newList; node != null; node = node.next) {
      sum += node.val;
      node.next = map[sum].next;
    }
    
    return newList.next;
  };
  
 