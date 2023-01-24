function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([1, 2, -3]));
console.log(mergeSort([9, 6, 3, 4]));
console.log(mergeSort([10, 20, 3, 45, 15]));
console.log(mergeSort([1, -2, -3, 4, -5, -6]));
