// 实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。

//  

// 示例：

// 输入：单向链表a->b->c->d->e->f中的节点c
// 结果：不返回任何数据，但该链表变为a->b->d->e->f

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

// 快慢指针解决，k个节点和中间节点，环
// class Solution {
//     public:
//         ListNode* getKthFromEnd(ListNode* head, int k) {
//             ListNode *p = head, *q = head; //初始化
//             while(k--) {   //将 p指针移动 k 次
//                 p = p->next;
//             }
//             while(p != nullptr) {//同时移动，直到 p == nullptr
//                 p = p->next;
//                 q = q->next;
//             }
//             return q;
//         }
//     };
    
// class Solution {
//         public:
//             ListNode* middleNode(ListNode* head) {
//                 ListNode *p = head, *q = head;
//                 while(q != nullptr && q->next != nullptr) {
//                     p = p->next;
//                     q = q->next->next;
//                 }
//                 return p;
//             } 
//         };
//  class Solution {
//             public:
//                 bool hasCycle(ListNode *head) {
//                     ListNode *slow = head;
//                     ListNode *fast = head;
//                     while(fast != nullptr) {
//                         fast = fast->next;
//                         if(fast != nullptr) {
//                             fast = fast->next;
//                         }
//                         if(fast == slow) {
//                             return true;
//                         }
//                         slow = slow->next;
//                     }
//                     return nullptr;
//                 }
//             };
            
        
        
        
      