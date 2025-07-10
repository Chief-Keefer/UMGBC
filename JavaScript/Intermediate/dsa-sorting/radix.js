function radixSort(arr) {
  if (arr.length === 0) return arr; // Handle empty array case

  const maxNum = Math.max(...arr);

  // Perform counting sort for each digit
  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    arr = countSort(arr, exp);
  }

  return arr;
}

function countSort(arr, exp) {
  let output = new Array(arr.length); // Output array
  let count = new Array(10).fill(0); // Count array for digits 0-9

  // Count occurrences of each digit
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(Math.abs(arr[i]) / exp) % 10;
    count[digit]++;
  }

  // Update count array to hold actual positions
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Put elements in output in sorted order
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(Math.abs(arr[i]) / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

module.exports = radixSort;
