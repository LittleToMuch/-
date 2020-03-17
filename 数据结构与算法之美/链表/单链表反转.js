// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
var reverseList = function(head) {
    if(!head || !head.next) return head
    let pre = null
    let cur = head

    while(cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};