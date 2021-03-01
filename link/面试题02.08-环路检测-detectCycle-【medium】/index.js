/*
 * @Author: huangxingyuan
 * @Date: 2021-01-26 17:45:57
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-26 17:46:03
 * @Description: 文件功能描述
 */

// 检测链表是否有环，若有返回：环所指向的节点
var detectCycle = function(head) {
    let map = new Map()
    while(head){
        if(map.has(head)) return head
        map.set(head,true)
        head = head.next
       
    }
    return null
};