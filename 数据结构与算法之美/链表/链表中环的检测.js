function hasCycle (head) {
    if(!head || !head.next) return false
    let left = head
    let right = head.next
    while(left !== right) {
        if(!right || !right.next) return false
        left = left.next
        right = right.next.next
    }
    return true
}