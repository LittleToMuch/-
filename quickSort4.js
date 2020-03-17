function quickSort(arr) {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const findCenter = (arr, left, right) => {
    let flag = arr[left];
    let idx = left + 1;
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i);
        idx++;
      }
    }
    swap(arr, left, idx - 1);
    return idx
  };
  
  const sort = (arr, left, right) => {
      if(left < right) {
          let center = findCenter(arr, left, right)
          sort(arr, left, center - 1)
          sort(arr, center, right)
      }
  }

  sort(arr, 0, arr.length - 1)
  return arr
}
