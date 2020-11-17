"use strict";
//=== 8. Sorting books ===//
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

//helper function to determine which of two books comes before the other
//check first letter of the book's title
//first letter in the alphabet gets sorted before other letters
//if first letter is identical, check second letter, third letter, and so on

function abcOrder(str1, str2, charIndex = 0) {
  //returns true if str1 comes before str2 in abc order
  //returns false if str2 comes before str1 in abc order
  //if strings are identical, return true
  if (str1 === str2) {
    return true;
  }
  if (
    str1.toLowerCase().charCodeAt([charIndex]) <
    str2.toLowerCase().charCodeAt([charIndex])
  ) {
    return true;
  } else if (
    str1.toLowerCase().charCodeAt([charIndex]) >
    str2.toLowerCase().charCodeAt([charIndex])
  ) {
    return false;
  } else {
    return abcOrder(str1, str2, charIndex + 1);
  }
}

//do a slightly modified merge sort on the array
//to account for the difference in input type

function mSortStrings(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSortStrings(left);
  right = mSortStrings(right);
  return mergeStringArr(left, right, arr);
}

function mergeStringArr(left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (abcOrder(left[leftI], right[rightI])) {
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
  const DATA = [
    "Goodnight Moon",
    "Tome of Horrors",
    "Where the Wild Things Are",
    "Modern Thermodynamics",
    "Intro tt C++",
    "Papercraft",
    "Grimms Fairy Tales",
    "Bedtime Bestsellers",
  ];
  mSortStrings(DATA);
  console.log(DATA);
}
main();
