# Binary search tree

* all left nodes are lesser or equal to parent node
* all right nodes are greater than parent
* each node is a Binary search tree
* functionality: insert BST
* search contains(value)
* depth first traversal - following each branch to bottom
* breadth first traversal - left to right at each level

## Recursion
* recursion is when a function calls itself
* base case / recursive case
* base - what is the number we can take and return to get the correct answer, answer is 1
* recursive - else return num * factorial(num-1)

## Call stack

* what order function is being called in, and what happens at each step
```js
// Factorial !
//4! = 4 * 3 * 2 * 1 = 24
//3! = 3 * 2 * 1 = 6

function factorial(num){
  //base case
  if(num === 1){
    return num;
  }
  //recursive case
  else{
    return num * factorial(num-1)
  }
} 
```
* factorial(4); 
* callstack: 

factorial(4)= 4 * factorial(3); // 4 * 6 = 24
factorial(3)= 3 * factorial(2); // 3 * 2 = 6
factorial(2)= 2 * factorial(1); // 2 * 1 = 2
factorial(1) = 1

## Insert Method
* the binary search tree constructor takes a value
* has a left AND right value
* the prototype insert(value) function receives a value
and then checks is the prop value larger or smaller than this BST value, if/else
* if its on left side, and the this.BST.left does not exist, then this.left = new BST(value)
* otherwise this.left.insert(value)
* the right is the opposite of left

## contains method
* check if the value at current node === value we are looking for, 
* else value can be greater or less than value in node
* if there is no left node, it doesnt exist, else we check left node if it contains() value
* if there is no right node, it doesnt exist, else we check right node if it contains() value

## Depth First Traversal - In-Order
* receives a function as a parameter
* a function that logs nodes to console
* function traverses through every node of BST, and run iterator function on each node
* starts traversing at top and follow every branch to bottom before moving on to next branch

* there are different implementations for Depth First Traversal and they differ in the order they visit each node of the tree.

* TREE nodes
                50
            /       \
        30             70
       /  \           /    \
    20      45      60      100
  /       /       /       /    \
10      35      59      85      105

- inorder (LEFT->PARENT->RIGHT) //10,20,30,35,45,50,59,60,70,85,100,105
- preorder (PARENT->LEFT->RIGHT) //50,30,20,10,45,35,70,60,59,100,85,105
    usage: make a copy of a tree
- postorder (LEFT->RIGHT->PARENT) //10,20,35,45,30,59,60,85,105,100,70,50
    usage: safely delete notes from a BST

## Breadth First Traversal
* moving down tree level by level visiting each node
* usage: define a hierarchy/level of command (ranking top->down)
* defines a queue (array), list works First-in, First-out
* pushing in at back, shifting out from front
* take node run iterator on the node, push its children in back of queue

eg.
* queue = [50]
* while loop queue not empty,
* shift out first element 
* push child nodes into back of queue
* repeat while loop

output: 50,30,70,20,45,60,100,10,35,59,85,105

## Binary Search Tree Wrap-up
* used to store data
* fast to search and retrieve data
* fast insert and delete data
* searching - every step is throwing away half the tree
* logarithmic runtime
* O (log n)

* to get this performance, it is mostly only possible with a balanced BST, most nodes have left/right child
* it is possible to have every node only having a right child, and you will end up with a linked list
* usage: Dictionary, Phonebook, Users

worst case: O(n)