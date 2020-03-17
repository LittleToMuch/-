function quickSort(arr) {
    const loop = arr => {
        if (arr.length < 2) return arr
        let pivoit = arr[0]
        let left = 1
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < pivoit) {
                let temp = arr[i]
                arr[i] = arr[left]
                arr[left] =temp
                left++
            }
        }
        arr[0] = arr[left - 1]
        arr[left - 1] = pivoit
        return [...loop(arr.slice(0, left - 1)), arr[left - 1], ...loop(arr.slice(left, arr.length))]
    }
    return loop(arr)
}

console.log(quickSort([2,6,3,8,1,9,4,7,5,10]))