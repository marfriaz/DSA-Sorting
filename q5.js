const LinkedList = require("./linkedlist-class");

//=== 5. Sorting a linked list using merge sort ===//
// Given a Linked List, sort the linked list using merge sort.
// You will need your linked list class from previous lesson to create the list
// and use all of its supplemental functions to solve this problem.

/**
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. 
You will need your linked list class from previous lesson 
to create the list and use all of its supplemental functions 
to solve this problem.
*/
function display(llist) {
  let currNode = llist.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function mSortList(list) {
  let currNode = list.head;
  if (currNode.next === null) {
    return list;
  }
  let length = 1;
  while (currNode.next !== null) {
    length++;
    currNode = currNode.next;
  }
  const middleI = Math.floor(length / 2);
  // console.log(`middleI is ${middleI}`);

  //make a new right-hand list with the second half of the nodes in the list
  let leftList = splitList(list, 0, middleI);
  // console.log('displaying left-hand list');
  // display(leftList);

  //make a new left-hand list
  // console.log('##################################');
  let rightList = splitList(list, middleI, length);
  // console.log('displaying right-hand list');
  // display(rightList);
  //add all of the values up to and including the middle node to leftList
  leftList = mSortList(leftList);
  rightList = mSortList(rightList);

  return mergeLists(leftList, rightList);
}

function splitList(list, startI, endI) {
  //make a new list of all nodes between startI and endI, including startI but not endI.
  let currNode = list.head;
  if (currNode === null) return;
  const returnList = new LinkedList();
  let i = 0;
  while (currNode !== null) {
    if (i >= startI && i < endI) {
      returnList.insertLast(currNode.value);
    }
    i++;
    currNode = currNode.next;
  }
  return returnList;
}

function mergeLists(leftList, rightList) {
  //given two sorted lists, return a sorted list
  //containing all values of the two component lists, in ascending order

  //create a new empty linked list
  const mergedList = new LinkedList();
  let currLeft = leftList.head;
  let currRight = rightList.head;

  //while we still have nodes in both lists
  while (currLeft && currRight) {
    //if the value of the left list is lower, append it to the end of mergedList
    //and move currLeft forward one node
    if (currLeft.value <= currRight.value) {
      mergedList.insertLast(currLeft.value);
      currLeft = currLeft.next;
    }
    //otherwise append the value of currRight to mergedList
    //and move currRight forward one node
    else {
      mergedList.insertLast(currRight.value);
      currRight = currRight.next;
    }
  }
  //once we've reached the end of one list
  //append values from the remaining single list until none remain
  while (currLeft) {
    mergedList.insertLast(currLeft.value);
    currLeft = currLeft.next;
  }
  while (currRight) {
    mergedList.insertLast(currRight.value);
    currRight = currRight.next;
  }
  //return the merged list
  return mergedList;
}

function main() {
  const LL = new LinkedList();
  LL.insertFirst(7);
  LL.insertFirst(8);
  LL.insertFirst(3);
  LL.insertFirst(6);
  LL.insertFirst(4);
  LL.insertFirst(1);
  LL.insertFirst(2);
  LL.insertFirst(5);

  const sorted = mSortList(LL);
  display(sorted);
}
main();

function main2() {
  const LL1 = new LinkedList();
  LL1.insertFirst(2);

  const LL2 = new LinkedList();
  LL2.insertFirst(4);

  const merged = mergeLists(LL1, LL2);
  //   display(merged);
}
main2();
