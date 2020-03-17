// 快慢指针找到中间节点，然后定义一个新指针从原链表开始， slow指针从中间开始，判断

function palindrome(head) {
    let slow = head
    let fast = head
    let p = head
    while(fast) {
        slow = slow.next
        fast = fast.next.next
    }
    while(slow) {
        if(p.val === slow.val) {
            continue
        } else {
            return false
        }
    }
    return true
}