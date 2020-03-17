let mainStack: number[] = []
let minStack: number[] = []
function push(element: number): void {
    mainStack.push(element)
    if (minStack.length === 0 || element <= minStack[minStack.length - 1]) {
        minStack.push(element)
    }
}

function pop(): number {
    if (mainStack[mainStack.length - 1] === minStack[minStack.length - 1]) {
        minStack.pop()
    }
    return mainStack.pop() as number
}

function getMin(): number {
    if (!mainStack.length) {
        throw new Error('stack is empty')
    }
    return minStack[minStack.length - 1]
}

push(4)
push(9)
push(7)
push(3)
push(8)
console.log(getMin());

