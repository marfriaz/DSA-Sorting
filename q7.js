"use strict";
//=== 7. Sort in place ===//
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(arr) {
  //randomly shuffles an array in place
  for (let i = 0; i < arr.length; i++) {
    //select a random index
    let randomIndex = Math.floor(Math.random() * arr.length);
    //swap the values at i and at the randomly chosen index
    swap(i, randomIndex, arr);
  }
  //return the randomized array
  return arr;
}

function swap(i, j, arr) {
  //given two indexes in an array, swaps the values of the two.
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function main() {
  shuffle(DATA);
  console.log(DATA);
}
main();
