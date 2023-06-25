## Hashtable

- contains 2 things :
  - a storage data structure
  - a hash function

- a js object is a hash table, key/value pair
- hash function takes key, usually a string, and returns a location in memory, hence instant time
- the return should be mapable, 2-way usage for encode/decoding from hash table 

### Pseudocoding a hashing function
* take an input
* create an output (always same if based on same output)

//what it may look like
obj = {};
obj.abc = true;
obj.bcd = 'hello'

//view of storage
{abc:true, bcd:'hello'}

//using hash to get memory address
myHash('abc') => 3

//save at location 3
memory [____,____,____,true]

//put it in hash function, it decrypts to find it at location 3

### Key components of a hash table
* Storage - not an object (as it is for 'testing our skills', using array)
* hash function
* functions : 
  - hashtable.set(prop, val)
  - hashtable.get(prop)
  - hashtable.remove(prop)

```pseudocode
Constructor
  storage = [undefined, undefined, undefined, undefined, undefined];
  hashingFunc(v) => returns index for the array number between 0-4

set(key, val) 'key', val
  //save the value in the array
  run the hashFunc('key')=>3
  save true to the 3rd index of our storage

get(key)
  return the value saved in storage
  run hasFunc on key again, will return the same value (eg.3 for 'key')
  retrieve value from storage using index from the hashFunc

remove(key)
  set the value at the index to null
  hash the key to get the index
  look up index on storage, set that to null

```

### Handling collisions

* storage will be an array of items that had collisions because the hash function returned the same index
* the stored item will have the key and the value
* then worst case it will be linear search through the list
* resize storage once reaching certain capacity
