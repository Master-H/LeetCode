// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

//  

// 进阶：

// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

//  

var addTwoNumbers = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    let res = [0]
    while(l1){
        arr1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        arr2.push(l2.val)
        l2 = l2.next
    }

    for(let i = arr1.length -1,j = arr2.length-1,k=0;i >=0 || j>=0 ; i--,j--,k++){
        let val1 = i >=0 ? arr1[i]:0
        let val2 = j>= 0 ?arr2[j]:0
        let sum = val1 + val2 + res[k]
        res[k] = sum % 10
        res[k+1] = sum/10 ||0
    }

    let start = new ListNode(res[res.length-2]) // 倒数第二个
    let node1 = start
    for(let i = res.length - 3; i>=0; i--){
        let node = new ListNode(res[i])
        node1.next = node
        node1 = node
    }

    if(res[res.length-1]){
        let head = new ListNode(res[res.length-1])
        head.next = start
        return head
    }
    return start

};