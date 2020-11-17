"use strict";
//=== 6. Bucket sort ===//
// Write an O(n) algorithm to sort an array of integers, where you know in advance
// what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

function bucketSort(arr, min, max) {
  //given an array, sort it with an O(n) algorithm
  //we know the maximum range of all values in the array
  //because of this, we know every possible value in the array
  //pass every value in the array into a hashMap, tracking the number of times each value appears
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (numMap.get(arr[i]) === undefined) {
      numMap.set(arr[i], 1);
    } else {
      numMap.set(arr[i], numMap.get(arr[i]) + 1);
    }
  }
  //then iterate from min to max
  //retrieving the values in the hashmap to know how many times the given value appears
  //overwrite the values in arr in order
  let arrI = 0;
  for (let i = min; i <= max; i++) {
    let numAppearing = numMap.get(i);
    while (numAppearing) {
      arr[arrI] = i;
      numAppearing--;
      arrI++;
    }
  }
  return arr;
}

function main() {
  const ARR = [3, 7, 4, 9, 12, 5, 19];
  const MAX = Math.max(...ARR);
  const MIN = Math.min(...ARR);

  bucketSort(ARR, MIN, MAX);
  console.log(ARR);
}
main();
