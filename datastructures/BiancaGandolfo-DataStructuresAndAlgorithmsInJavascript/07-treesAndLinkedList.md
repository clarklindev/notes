## Trees
* tree has root
* binary tree has parent child relationship with possibly 2 children
* a tree without children is a leaf
* tree cannot be circular, leaf cannot point to root

### Tree interface
* constructor
* insert(key)
* search(key)
* min/max
* remove(key)

### linkedList
* notes: see udemy-LearningDatastructures/02-linkedlist.js

* simplified tree
* primitive data structure
* tree where each node only has one child
* linked lists can be circular where tail points to head

### LinkedList interface
* constructor() storage, head
* stores reference to next item in the list
* stores data
* addToTail() O(1) / insert somewhere not at head or tail, O(n) 
* remove(node)  //remove and returns it

#### Exercise - implement a linked list
//see notes - udemy-learningDataStructuresInJavascriptFromScatch

### N-ary (any number of child nodes tree)
    