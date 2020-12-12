// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

// 请你将 list1 中第 a 个节点到第 b 个节点删除，并将list2 接在被删除节点的位置。



var mergeInBetween = function(list1, a, b, list2) {
    let cur = list1
    while(a>1){
        cur = cur.next
        a--
    }
    let node = cur.next
    for(let i = a; i < b+1;i++){
        node = node.next
    }
    cur.next = list2
    while(cur.next){
        cur = cur.next
    }
    cur.next = node
    return list1
}
var mergeInBetween = function(list1, a, b, list2) {
    let cur = list1
    // 遍历到 a 前面一个节点, a 前面的节点无需操作
    for (let i = 0; i < a - 1; i++) 
        cur = cur.next
    
    // 过滤掉不需要的节点
    let node = cur.next
    for (let i = a; i < b + 1; i++) 
        node = node.next
    
    // 从 b + 1 位置开始 插入list2
    cur.next = list2
    while (cur.next)
        cur = cur.next;

    // list2全部插入之后 指向list1过滤后的所有节点
    cur.next = node;
    return list1;
};

