function merge(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: an array of 0 or 1 elements is already sorted
  // Recursive case: split the array into halves and merge sort each half
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Sort the left half
  const right = mergeSort(arr.slice(mid)); // Sort the right half

  return merge(left, right); // Merge the sorted halves
}

module.exports = { merge, mergeSort };
