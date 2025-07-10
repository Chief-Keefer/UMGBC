/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx, endIdx) {
  const pivotValue = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (arr[i] < pivotValue) {
      swapIdx++;
      // Swap elements
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  // Swap the pivot element with the element at the swap index
  [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];

  return swapIdx; // Return the final position of the pivot
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx, rightIdx) {
  if (leftIdx < rightIdx) {
    // Get the pivot index
    const pivotIndex = pivot(arr, leftIdx, rightIdx);

    // Recursively sort the left and right subarrays
    quickSort(arr, leftIdx, pivotIndex - 1); // Sort left side
    quickSort(arr, pivotIndex + 1, rightIdx); // Sort right side
  }

  return arr; // Return the sorted array
}

module.exports = quickSort;
