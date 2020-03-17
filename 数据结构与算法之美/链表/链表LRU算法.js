function LRU(head, data) {
    let p = head
    let heads = head
    if(p.value = data) return;
    while(p.next!==null) {
        if(p.next.value === data) {
            p.next = p.next.next
            let newNode = new Node(data)
            newNode.next = head
        }
        if(isFull(heads)) {
            let prevEnd = endPivot(heads)
            prevEnd.next = null
            let newNode = new Node(data)
            newNode.next = head
        }
        if(hasEmpty(heads)) {
            let newNode = new Node(data)
            newNode.next = head
        }
    }

    let isFull = (head) => {
        while(head) {
            if(head.value === null) {
                return false
            }
        }
        return true
    }
    let hasEmpty = (head) => {
        while(head) {
            if(head.value === null) {
                return true
            }
        }
        return false
    }
    let endPivot = (head) => {
        if(head.next === null) {
            return head
        }
        head = head.next
    }

}