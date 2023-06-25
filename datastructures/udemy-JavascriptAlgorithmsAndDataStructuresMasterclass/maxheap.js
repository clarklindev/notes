class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  //iterative loop with while loop
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[idx];
    //stop when index is greater than zero
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      //swap if element is greater than parent
      if (element <= parent) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      //update parent index
      index = parentIndex;
    }
  }

  extractMax() {
    //edge case
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      //check the right
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        //if havent swapped yet AND right is bigger than element
        //if swapped AND right is bigger than leftChild
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
