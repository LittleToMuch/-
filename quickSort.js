function quickSort(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return
    }
    let pivotIndex = partition(arr, startIndex, endIndex)
    quickSort(arr, startIndex, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, endIndex)
}

function partition(arr, startIndex, endIndex) {
    let pivot = arr[startIndex]
    let left = startIndex
    let right = endIndex

    while(left !== right) {
        while (left < right && arr[right] > pivot) {
            right--
        }
        while (left < right && arr[left] <= pivot) {
            left++
        }
        if (left < right) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }
    arr[startIndex] = arr[left]
    arr[left] = pivot
    return left
}

let arr = [4, 4, 6, 5, 3, 2, 8, 1]
quickSort(arr, 0, arr.length - 1)
console.log(arr);
