//=== 1. Understanding merge sort ===//

// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// What are the first 2 lists to be merged?
// Which two lists would be merged on the 7th merge?

// On call #1, left is assigned to [21, 1, 26, 45, 29, 28, 2, 9]. On recursive call #1,
// left is further divided to be [21, 1, 26, 45]. On recursive call #2, left is further divided to be [21, 1].
// On recursive call #3 - mergeSort([21, 1]) - left is further divided to be [21].

// On recursive call #4, mergeSort([21])
// returns [21]. The algorithm then processes the right-side value of 1. On recursive call #5, mergeSort([1]) returns [1].
// On recursive call #6, mergeSort([21, 1]) calls merge ([21], [1], [21, 1]). On recursive call #7, merge returns [1, 21].
// This causes mergeSort([21, 1]) to return [1, 21]. On recursive call #8, mergeSort([26, 45]) divides left to be [26]
// and right to be [45]. On recursive call #9, mergeSort([26]) returns 26. On recursive call #10, mergeSort([45]) returns 45.
// On recursive call #11, merge([26], [45], [26, 45]) returns [26, 45]. This causes mergeSort([26, 45]) to return [26, 45].
// On recursive call #12, mergeSort([21, 1, 26, 45]) calls merge([1, 21], [26, 45], [21, 1, 26, 45]) and returns [1, 21, 26, 45].
// On recursive call #13, mergeSort([29, 28, 2, 9]) subdivides itself into [29, 28] and [2, 9]. On recursive call #14, mergeSort([29, 28])
// subdivides itself into [29] and [28]. On recursive call #15, mergeSort([29]) returns 29. On recursive call #16, mergeSort([28]) returns 28.

//=== 2. Understanding quicksort ===//

// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order.
// After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20.
// Which of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been 17, but could not have been 14
// The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17

// The pivot could have been 17, but could not have been 14 ***The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot The pivot could have been 14, but could not have been 17

// ***The pivot could have been either 14 or 17: The array is currently sorted in such a way that all items to the
// left of 14 are less than 14 and all items to the right of 14 are greater than 14. This also holds true for 17.
// Therefore, either of these numbers could have been the pivot. No other value in the array meets this criteria.

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after
// the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// When using the first item on the list as a pivot

// When using the last item on the list as a pivot

// Partition #1: (Pivot = 12) [10, 3, 9, 12, 14, 17, 13, 15, 19, 16] Partition #2: (Left-side, pivot = 9) [3, 9, 10, 12, 14, 17, 13, 15, 19, 16]

// When using the first item on the list as a pivot

// Partition #1: (pivot = 14) [13, 10, 3, 9, 12, 14, 17, 15, 19, 16] Partition #2: (Left-side, pivot = 13) [10, 3, 9, 12, 13, 14, 17, 15, 19, 16]

//=== 3. Implementing quicksort ===//

// Write a function qSort that sorts a dataset using the quicksort algorithm.
// The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48
// 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67
// 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13
// 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.
let DATA = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5".split(
  " "
);
DATA = DATA.map((num) => parseInt(num));

function qSort(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function main() {
  const sorted = qSort(DATA);
  console.log(sorted);
  let ok = true;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] > sorted[i + 1]) ok = false;
  }
  console.log(ok);
}
main();

//=== 4. Implementing merge sort ===//
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}

function merge(left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      arr[outputI++] = left[leftI++];
    } else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr;
}

function main() {
  const sorted = mSort(DATA);
  console.log(sorted);
  let ok = true;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] > sorted[i + 1]) ok = false;
  }
  console.log(ok);
}
main();
