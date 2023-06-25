// min binary heap reverses logic of max binary heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  //iterative loop with while loop
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    //stop when index is greater than zero
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      //swap if element is lesser than parent
      if (element.priority >= parent.priority) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      //update parent index
      index = parentIndex;
    }
  }

  dequeue() {
    //edge case
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return min;
  }

  //non-recursive
  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      //check the left
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      //check the right
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        //if havent swapped yet AND right is bigger than element
        //if swapped AND right is bigger than leftChild
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
//lower numbers have higher priority
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
