"use strict";

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // head to indicate the beginning of the list
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    // Constant Time O(1)
    // Inserting at the beginning of the list can be achieved by the following steps:
    // Create a new node item
    // Point the head to that new node
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      // Check to see if the list is empty, if it is, then insert the new item as the only item in the list
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
        // Start at the beginning of the list and move through the list until you reach the end of the list
      }
      tempNode.next = new _Node(item, null);
      // Create a new node item
      // Set the end node's next pointer to the new node
      // Linear Time O(n)
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    // Linear Time O(n)
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
    // you find the node before the node you are removing and update its next pointer to skip over the removed node
    // best-case performance is O(1),
    // and the average and worst cases are O(n) due to finding the node that you want to remove.
  }

  //=== Creating a singly linked list ===//

  // Write a function main. Within the function, using the linked list class above,
  // create a linked list with the name SLL and add the following items to your
  // linked list: Apollo, Boomer, Helo, Husker, Starbuck.

  // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  insertBefore(newItem, nextItem) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== nextItem) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return null;
    }
    let newNode = new _Node(newItem, previousNode.next);
    previousNode.next = newNode;
  }

  // Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  insertAfter(newItem, prevItem) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while (currNode !== null && currNode.value !== prevItem) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    if (prevItem.next === null) {
      this.insertLast(newItem);
      return;
    }
    let newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }

  // Implement a function called insertAt() that inserts an item at a specific position in the linked list.
  insertAt(newItem, pos) {
    let stepper = 0;
    let currNode = this.head;
    while (stepper !== pos) {
      stepper++;
      currNode = this.head.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    if (stepper === pos) {
      this.insertAfter(newItem, currNode.value);
      return;
    }
  }
}

module.exports = LinkedList;
