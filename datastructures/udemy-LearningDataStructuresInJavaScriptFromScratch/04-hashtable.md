# Hash Table
* constant time lookup and insertion (unless there are Collisions)
* runtime of O(1), depending on hashtable size, and good hashing function
* table of pre-determined length
* hash table, each cell of table (called a bucket) holds a piece of data stored as {key:value} 
* we use an array to represent our hash table, and starts off empty
* we need a hashing function

INSERTING
* take key and hash it into a number, this number will be the position to insert in the hashtable
* bucket insertion conflicts (called collisions) get chained on in a linkedlist
* a hashing function helps with inserting and retrieving data
* so we need a hashing function to convert the keys to position to insert into the table

RETRIEVING
* function get(key) and its hash method will give same hash number as when we inserted

## Constructor functions for Hash Table and Hash Node

* Constructor Function for Hash Table
* Constructor Function for Nodes

## charCodeAt Method and Modulus Operator

### charCodeAt
* how to turn a letter / character into number value (this is for hashing)
* every char corresponds with unicode value and we can access this value with charCodeAt()
* charCodeAt() takes in an index number

eg. 'hello world'.charCodeAt(1);  // gives numeric value of chat at index 1 (e) = 101
eg. 'hello world'.charCodeAt(4);  // gives numeric value of chat at index 4 (0) = 111

### Modulus
* gives remainder of a number after it has been divided by another number
7 % 3 , means 7 divided by 3 and give the remainder = 1;
100 % 30, means 100 divided by 30, and give the remainder = 10;

## Hash Method
* takes in a string(key property on one of the nodes), hash it into a number that corresponds with number on hashtable
* hash method takes a key, 
* key is key prop on a node
* turn key into a number using charCodeAt, 
* adding up values in each character in key, storing total in a variable
* the bucket position is 'total' % this.numBuckets
* usage: console.log(myHT.hash('Becca')); //12

## insert method
* take a key/value pair, turn it into a hash node,
* place node into correct bucket in Hash Table 
```js
    let index = this.hash(key);
```
* if bucket[index] is empty, add our node to this index
* else if bucket has node/chain already, we travel to end chain with while loop
* once we found the last node in chain, point to that nodes' next and create a new HashNode(key, value)

## Refactoring Insert Method
* refactoring insert method to allow us to update email address
* else{} block update and check if friend already exists, if they do, update the info, if they dont, add them to end of list
* add check for first element, if element is the one we want to update,
* else currentNode = this.buckets[index] use while loop and check through currentNode.next, compare keys, if same, update currentNode.next.value with value; and return; to abort while loop

## Get Method
* using get() method to retrieve information
* takes in key 'name', 
* returns email address if exists, if does not exist, return null

## HashTable wrap-up
* performance,
* constant time insert and lookup, O(1)
* storing email
* storing users in database
* drawback: storing data is determined by hashing function, doesnt store references to other data in the data structure