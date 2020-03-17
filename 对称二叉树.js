class Node {
    constructor (val) {
        this.val = val
        this.left = this.right = undefined
    }
}

class Tree {
    constructor (nodeArr) {
        let nodeList = []
        for(let i = 0; i < nodeArr.length; i++) {
            let node = new Node(nodeArr[i])
            nodeList.push(node)
            if (i > 0) {
                // 当前节点的层数
                let n = Math.floor(Math.sqrt(i + 1))
                // 当前层的起始点
                let q = Math.pow(2, n) - 1
                // 上一层的起始点
                let p = Math.pow(2, n - 1) - 1
                // 当前节点的父节点
                let parent = nodeList[p + Math.floor((i - q) / 2)]
                if (parent.left) {
                    parent.right = node
                } else {
                    parent.left = node
                }
            }
        }
        let root = nodeList.shift()
        nodeList.length = 0
        return root
    }

    static isSymmetry (root) {
        if (!root) {
            return true
        }
        let walk = (left, right) => {
            if (!left && !right) {
                return true
            }
            if ((left && !right) || (!left && right) || (left.val !== right.val)) {
                return false
            }
            return walk(left.left, right.right) && walk(left.right, right.left)
        }
        return walk(root.left, root.right)
    }
}

const arr = [1,2,2,3,4,4,3]
const root = new Tree(arr)
console.log(Tree.isSymmetry(root))