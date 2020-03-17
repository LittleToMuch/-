function removeNthFromEnd (head, n) {
    let p = head
    let prev = new ListNode(-1)
    prev.next = head
    let len = 0
    while(p) {
        len++
        p = p.next
    }
    let x = len - n
    let pre = prev
    while(x) {
        x--
        pre = pre.next
    }
    pre.next = pre.next.next
    return prev
} 

function removeNthFromEnd2 (head, n) {
    let slow = head
    let fast = head
    while(n) {
        n--
        fast = fast.next
    }
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
}