## Learning Data Structures

* Learn Data Structure Concept, draw it, create methods
* Build the data Structure
    - pseudocode implementation
    - code the data structure constructor
* use the data structure
* understand the data structure
    - time complexity
    - optimization

## Stacks and Queues

### Stacks
* LIFO - last item added in the stack will be first taken out (push from back, pop off back)
* example is a callstack
* useful with Recursion

### Stacks Interface
- Constructor some kind of storage
- push(value)
- pop()
- size()

### Queues
* FIFO - first in, first out
* enqueue / dequeue
* enqueue at back, dequeue from front

### Queue Interface
- Constructor with some kind of storage
- Enqueue(value)
- Dequeue()
- size()

### exercises 
* https://github.com/kuychaco/algoClass
* solutions: https://github.com/kuychaco/algoClass/tree/solutions/

1. Implement a stack data structure:
https://github.com/kuychaco/algoClass/blob/master/data-structures/stack.js
Note: only do the first exercise after you implement the stack

2. Create a queue data structure:
https://github.com/kuychaco/algoClass/blob/master/data-structures/queue.js
Note: no need to attempt the last exercise. Come back to it after we cover breadth-first search :)

## Queue with 2 Stacks
* Queue first in /first out
* when you pushing using in-stack
* when removing, because it is a stack , last in first out, we pop() everything off first stack, and push() it onto second stack (this reverses the items), and then we can pop the second stack to remove the element we wanted to in the first stack
* and you transfer the stack when you pop() 
* if you reverse a stack, it becomes a queue for pop()
* we use _stackOut only for popping