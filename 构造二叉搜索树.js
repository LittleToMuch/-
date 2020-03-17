// sbTree

class Node {
    constructor (val) {
        this.val = val
        this.left = this.right = null
    }
}

class Tree {
    constructor (nodeArr) {
        let root = new Node(nodeArr.shift())
        // 遍历所有的数据，逐渐插入到当前这棵搜索树中去
        nodeArr.forEach(item => {
            this.insert(root, item)
        })
        return root
    }

    insert(node, data) {
        if (node.val > data) {
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