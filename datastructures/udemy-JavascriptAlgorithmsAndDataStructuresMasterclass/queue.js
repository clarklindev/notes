//FIFO - first in-first out
//possible solution: adding to array with push(), remove with shift()
//possible solution: adding to array with unshift(), remove with pop()

//from scratch based off linkedlist
//options: add to begining, remove from end
//options: add to end, remove from beginning //better option
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //returns size of queue
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //returns the dequeued node
  dequeue() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
