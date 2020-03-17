class Node {
    constructor (val) {
       this.val = val
       this.left = this.right = null
    }
}

class SBTree {
    constructor (arr) {
        let root = new Node(arr.shift())
        arr.forEach(item => {
            this.insert(root, item)
        })
    }
    
    insert (node, data) {
        if(node.val > data) {
            if(!node.left) {
                node.left = new Node(data)
            } else {
                this.insert(node.left, data)
            }
        } else {
            if(!node.right) {
                node.right = new Node(data)
            } else {
                this.insert(node.right, data)
            }
        }
    }
}