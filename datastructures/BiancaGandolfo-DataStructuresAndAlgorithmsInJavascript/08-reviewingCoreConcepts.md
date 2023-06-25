## Time Complexity
### Time Complexity of Common Operations
* O(1) - Constant - running a statement
* O(1) - Constant - value look-up on Array and Object
* O(logn) - Logorithmic - loop that cuts problem in half every operation
* O(n) - Linear - Looping through the values of an array
* O(nLogn) - Linearithmic - Recursion with binary split (merge sort)
* O(n^2) - Quadratic - double nested loops
* O(n^3) - Exponential - Tripple nested loops

### Performance order
1. O(1)
2. O(logn)
3. O(n)
4. O(nlogn) //merge sort / quick sort
5. O(n^2)
6. O(n^3)
<!-- ============================================== -->

## Calculating Big-O of Loops
* Combining time to calculate time complexity
* if its inside a loop (recursive or each other), multiply
* if its next to each other, plus
* drop any non significant digits and assume worst case

<!-- ========================================== -->

## Elemenary Sorting Algorithms

### Bubble Sort O(n^2)
* Compares adjacent elements and 'bubbles up' largest

### Insertion Sort O(n^2)
* Takes the first element and sorts the rest of the array around that element,
inserting it into the right place

### Selection Sort O(n^2)
Keeps selecting smallest element until the array is sorted

### Non-Comparison Sorts
* Radix
* Counting
* Bucket

### Vocab
#### Choosing the proper algorithm for use case
* Stable - stable algorithm which will preserve the original order for items of the same value
* Adaptive - becomes more efficient when the list is nearly sorted

<!-- ============================================== -->

## Merge Sort
* 0. recognize base case (return when size of 1)
* 1. divide: break problem down during each recursive call
* 2. conquer: merge
* 3. combine: merge

## Quick Sort
* the pivot you pick is the number to compare to when you loop the array
* when arr[i] < pivot value, swap the two, and then increment pivotLoc
* when looped through arr, swap last element in arr (pivot) with arr[pivotLoc] 
* 'pivotLoc' in partition() will eventually be the final location of the pivot when we do our last swap
* quickSort(arr, small, large), small and large are indexes of arr as this is an inplace sort, meaning you are looking at a subset section of the array everytime.

<!-- ============================================== -->
## Stacks and queues
* they are ordered collection of items
* limited access data structure - LIFO / FIFO
* know for fast insert / removal

### difference between stack and queue
Stack - LIFO, push O(1), pop O(1)
QUEUE - FIFO, enqueue O(1), dequeue O(n) 

### Uses
* Stack
    - depth first search
    - backtracking in a maze
    - undo operations
    - call stack
    - parsing expressions

* Queue 
    - breadth first search
    - pop-up messages
    - events
    - http requests

### Implementation
Stack - linkedLists, array/object
Queue - linkedLists, array/object

<!-- ============================================== -->

## LinkedList
* https://github.com/kuychaco/algoClass/blob/solutions/data-structures/doublyLinkedList.js
* ordered collection of nodes
* sequencial access
* nodes contain references to next node

O(1) - insert/delete with a reference to the node eg. adding to HEAD or TAIL
O(n) - insert/delete without a reference to the node (needs to loop through linkedList)
O(n) - search

<!-- ============================================== -->

## Trees
### N-ary (any number of child nodes tree)