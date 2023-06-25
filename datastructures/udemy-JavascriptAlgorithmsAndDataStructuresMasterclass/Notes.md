## Udemy - Javascript Algorithms and Data Structures Masterclass

Keywords - recursion accumulator

## Benchmark testing with performance.now()

### alternative algorithm for adding up to n

```js
//with normal for-loop
//+= is n additions n is assignments
//i++ is n additions and n assignments
//n comparisons

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

//with performant algorithm
//3 operations
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

## BigO Time complexity

- is comparing number of operations
- forloop O(n)
- nested-forloop O(n^2) quadratic

## Problem Solving Approach

1. Understand the problem
2. Concrete examples
3. Break it down
4. solve or simplify
5. look back and refactor

## Problem solving patterns

know examples for

- frequency counter pattern
- multiple pointers pattern
- sliding window pattern
- divide and conquer pattern

## Recursion

- know that there is a callstack
- base case, or recurse
- recursion can be also writtern with iteration
- helper method recursion (using helper method) vs pure recursion

## Searching Algorithms

- https://www.toptal.com/developers/sorting-algorithms
- linear search
- binary search (only on sorted list)
  STEPS
  - if left is less than right index
  - works with index limits on the original array passed into recursive function
  - check if equal / check left of half / check right of half
  - time complexity O(logn)
- naive string searching for substring in larger string
  STEPS
  - loop over the long string
  - loop over the short string
  - if the characters dont match, break out of the inner loop
  - if the characters do match, keep going
  - if you complete the inner loop and find a match, increment the count of matches
  - return the count

## Sorting algorithms

- built in array .sort() using unicode comparison

```js
// - if result from fn returns negative, means b is larger than a
// - if result from fn returns positive, means a is larger than b
// - returns 0, a and b are the same as far as sort is concerned

[6, 3, 7, 15].sort(numbercompare);

function numbercompare(a, b) {
  return a - b;
}

function lengthcompare(a, b) {
  return a.length - b.length;
}
```

### swapping values

```js
// es5
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//es6 - using arr destruction
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};
```

## SORTING - Bubbesort

- LARGEST VALUES BUBBLE TO TOP
- NOTE: less optimized bubble sort is 2 nested forloops with redundant comparisons
- worst case: O(n^2)
- best case for nearly sorted: O(n)

OPTIMIZED STEPS:

- if full loop has no swaps then its sorted
- start looping with a variable called i the end of the array towards the begging
- start an inner loop with a variable called j from the begining until i-1
- if arr[j] is greater than arr[j+1], swap those two values
- return the sorted array

## SORTING - Selection sort

- similar to bubblesort, but instead of first placing large values into sorted position, it places small values into sorted position
- O(n^2)

STEPS

1. store the first element as the smallest value you've seen so far,
2. compare this item to the next item in the array until you find a smaller number
3. if a smaller number is found, designate that smaller number to be the new 'minimum'
   and continue until the end of the array.
4. if the 'minimum' is not the value (index), you initially began with, swap the two values

## SORTING - insertion sort

- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the correct order, iterate through the sorted portion (ie. the left side) to place the element in the correct place.
- repeat until the array is sorted

```js
function insertionSort(arr) {
  //go through the length of array
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    //j is one before i at each i loop, so whatever iteration i is on, j will go from that to 0, js is counting downward
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //keep moving items arr[j] to arr[j+1] if its greater than currentVal
      arr[j + 1] = arr[j];
    }
    //else if it reaches here it means where arr[j] was is where currentVal should go
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}
insertionSort([2, 1, 9, 76, 4]);
```

## Radix sort

- only works with numbers
- not comparing numbers by sorting differently
- using binary - strings can be converted to numbers
- looking at number of digits to determine the size ie. 1 digit number is smaller than 2 digit number

STEPS

- look at the right most digit in the whole set, for every number in set, put them in bucket group based on their number NOTE: they are unsorted
- then put them back into a list in that order
- then look at the next digit from right, and sort in their bucket, and all numbers that dont have number to its left, are put in 0 bucket
- AHA moment is that the numbers that dont have the number of digits in the current bucket comparison are put in the 0 bucket

### Radix helper method

- helper methods - getDigit(num, place) returns the digit in num at the given place value (base 10 numbers, starts from right with 0)
- times to check to do radix sort keep track of digits of largest number
  function mostDigits(nums)

### Radix pseudocode

- define function that accepts list of numbers
- figure out how many digits the largest number has
- loop from k=0 up to this largest number of digits
- for each iteration of loop:
  - create buckets for each digit (0-9)
  - place each number in the corresponding bucket based on its kth digit
- replce our existing array with values in our buckets, starting with 0 and going up to 9.
- return list at the end!

### Radix BigO

- k is number of digits in a number in n

- time best O(nk)
- time average O(nk)
- worst O(nk)
- space O(n+k)

---

## Trees

### kinds of trees

- binary trees (2 nodes)
- heaps
- b-trees (triangle)

### tree traversal

- when to use? depends on situation

#### BFS

- uses queue for nodes still to visit

#### DFS

- uses recursion
- use when tree is wider than deep
- inorder on BST, returns an ordered set
- preorder on BST, used for cloning, given to you in order to reconstruct tree

---

## Heaps (a category of trees)

### binary heap

- each parent has most 2 child nodes
- always as compact as possible (left/right) filled before depth, left always first
- used for priority queues
- used for graph traversal

### Binary Heap

- MaxHeap every parent is larger than its children
- MinHeap every parent is smaller than its children

#### BigO

- Insertion O(logN)
- Removal - O(logN)
- Search - O(logN)

#### min vs max heap

- MaxBinaryHeap - but parent is always larger than children
- MinBinaryHeap - parent nodes always smaller than child nodes

### storing heaps

- can use an array to store a binary heap
- first element is the root, then its children is the next 2 values
- relationship?

#### Parent to child

- index n, left child is at 2n + 1
- index n, right child is at 2n + 2

#### Child to parent

- Math.floor( (n-1)/2) );

### Adding to heap

- add at end,
- bubble up to its correct spot depending if min/max heap.
- bubble up recursion - if its larger than parent... swap

### removing from heap

- max heap - removing the highest value
- min heap - remove min value

#### STEPS

- remove root
- replace with most recently added (last value)
- adjust down (AKA bubble-down, trickle down, cascade down, extract min/max)
- always swap down with larger of 2 children

### Priority queue

- data structure where each element has a priority
- elements with higher priorities are served before elements with lower priority
- priority queue with heap - the heap max is always at the top
- insersion and remove - O(logn)
- when 2 elements have same priority can add a time added

## Hash Table

- it handles collisions by: separate chaining / linear probing
- separate chaining is when there is a collision, add the next item in at the array at that index
- linear probing - if the array at index is occupied, find the next available slot
- using an array to build hash
- convert values to numbers for slots of array (hash functions)

## Hash function

- convert keys into valid array index

### BigO - average case

- insert: O(1)
- delete: O(1)
- access: O(1)

### good hashing function

- fast
- doesnt cluster outputs at specific incides but distributes uniformly
- deterministic (same input/same output)

---

## Graphs

- definitions: nodes and connections
- implementation with adjacency list

### Uses for graphs

- social networks
- location / mapping
- routing algorithms
- visual hierarchy
- file system optimization
- recommendations (ratings)

### types of graphs

Terminology:

- vertex - a node
- edge - connection between nodes
- weighted / unweighted - values assigned to distances between vertices
- directed / undirected -direction assigned to distances between vertices

### representing graphs

#### by adjacency matrix

- using an adjacency matrix to represent connected vertices by edges
- representing by nested array..

#### by adjacency list

- using a hash table to store at that index all connections in array

```js
//storing using adjacency list (with hashmap)
{
  A: ['B', 'F'],
  B: ['A', 'C'],
  F: ['A', 'D']
}
```

### bigO (adjacency Matrix vs adjacency list)

#### Adjacency Matrix

- add vertex : O(V^2)
- add edge: O(1)
- remove vertex: O(V^2)
- remove edge: O(1)
- query: O(1)
- storage: O(V^2)

advantages: faster to lookup specific edge
disadvantage: takes up more space in graphs, slower to iterate over all edges

#### adjacency list (more optimized for space)

- add vertex : O(1)
- add edge: O(1)
- remove vertex: O(V+E)
- remove edge: O(E)
- query: O(V+E)
- storage: O(V+E)

advantages: takes up less space in sparse graphs, faster to iterate over all edges
disadvantage: can be slower to lookup specific edge

## Traversing Graphs

- visiting each vertex in a graph

### depth first traversal

- traverse as far down as possible (prioritise depth first)
- marking nodes alphabetically marking nodes as visited
- for each unvisited neighbour visit them and recursively call DFS

### breadth first traversal

- visit neighbors at current depth first
- adding heights (depth) to source vertex - visit nodes at same height first
- keeping track of vertices already visited
- uses queue (push / shift).. add to queue after marking it as visited

---

## Dijkstra shortest path algorithm

- famous algorithm
- based off graphs (weighted graph)
- uses a priority queue as part of its implementation (we did this in the Heap section)
- finds shortest path between two vertices on a graph
- making graph weighted by adding values to edges

### how the algorithm works? walkthrough

1. everytime we visit a new node, we pick the node with the smallest known distance first
2. once we've moved to the node we are going to visit, we look at each of its neighbors
3. for each of neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
4. if the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

- initially we always start node to itself is 0, and everything else is initially infinity
- in a previous{} structure, we register how we got to this node...
- out of nodes not visited, pick the smallest known distance
- look at its neighbors and look startnode to current vertex and figure out the path distance, if its shorter, update previous{}

#### Psuedocode

1. function should accept a starting and ending vertex
2. create an object (we'l call it distances) and set each key to be every vertex in the adjacency list with a value of inifinity, except for the starting vertex which should have a value of 0
3. after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because thats where we begin.
4. create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
5. start looping as long as there is anything in the priority queue.

- deque a vertex from the priority queue.
- if that vertex is the same as the ending vertex - we are done!
- otherwise, loop through each value in the adjacency list at that vertex
  - calculate the distance to that vertex from the starting vertex
  - if the distance is less than what is currently stored in our distances object
    - update the distances object with new lower distance
    - update the previous object to contain that vertex
    - enqueue the vertex with the total distance from the start node
