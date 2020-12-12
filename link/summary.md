> 遇到链表题思路： 双指针 Map  stack
* 走到那里
```
 1 2 3 4 5 6 
第4个，其实只需要走3步

let node = head
let cur = node
while(let i = 0; i < 3;i++){
    cur = cur.next
}
这个时候 cur = 3


// n = 4
while(n > 0){
    n--
}

```