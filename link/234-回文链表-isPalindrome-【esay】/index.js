// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true

var isPalindrome = function(head) {
    if(!head) return true
    let res = []
    while(head){
        res.push(head.val)
        head = head.next
    }
    return res.join('') === res.reverse().join('')


};