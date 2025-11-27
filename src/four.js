function addArray(arr) {
  if (arr.length < 1) {
    return 0
  }
  return arr[0] + addArray(arr.splice(1))
}
addArray([1, 2, 3, 4]);