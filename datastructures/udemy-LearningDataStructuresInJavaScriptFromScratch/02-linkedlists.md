# linked List

* list of elements called nodes 
* connected together in a single line
* 2 types 
    - single linked list    - each node has reference to next node
    - double linked list    - each node has reference to next and previous node
* to function, needs to know about head and tail node
* this is done via HEAD pointer and TAIL pointer

## Operations on linked list
* adding to head, adding to tail
* removing from head, removing from tail
* search through linked list

## LinkedList node
* value
* next
* prev

### Linked List performance
* adding/removing from head and tail - O(1) constant time
* searching through - 0(n), worst case, iterate through entire list
* practical use cases: online gaming, poker, board games, dominoes
* javascript -> good data structure for languages that have memory management, help by breaking up a lot of data into little pieces, and they dont have to be stored together
