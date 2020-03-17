function quickSort(arr) {
    const loop = arr => {
        if (arr.length < 2) return arr
        let prev = arr[0]
        let left = []
        let right = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < prev) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return [...loop(left), prev, ...loop(right)]
    }
    return loop(arr)
}

console.log(quickSort([1, 3, 5, 2, 1]))


