var mainStack = [];
var minStack = [];
function push(element) {
    mainStack.push(element);
    if (minStack.length === 0 || element <= minStack[minStack.length - 1]) {
        minStack.push(element);
    }
}
function pop() {
    if (mainStack[mainStack.length - 1] === minStack[minStack.length - 1]) {
        minStack.pop();
    }
    return mainStack.pop();
}
function getMin() {
    if (!mainStack.length) {
        throw new Error('stack is empty');
    }
    return minStack[minStack.length - 1];
}
push(4);
push(9);
push(7);
push(3);
push(8);
console.log(getMin());
