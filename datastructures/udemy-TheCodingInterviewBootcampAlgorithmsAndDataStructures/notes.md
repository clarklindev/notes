# Get Started Here


2 phases 
- contact phase
    1. recruiter
    2. referal
    3. submit resume online
* get general idea of who you are

- interview phase
* culture fit / can you code
    1. phone screen
    2. onsite inteview

## setting up the tests
* github.com/StephenGrider/AlgoCasts
* inside exercises folder, run jest fib/test.js --watch

```js
//inside exercises/
jest fib/test.js --watch         //testing exercises/fib/
```

## solving these exercises

### Quokka
* CTRL+SHIFT+P
* choose quokka new javascript file

### debugger;
* index.js: using `debugger;` statement to debug, we have to call the function if we are using the `debugger;` statement
* run code: `node inspect index.js`
* `c` for continue
* then we can view things with debug in repl(read/edit/printline) mode, `repl`
* now we can view variable values, eg. let str = 'hello', then we can type just the variable `str` to view its value 

## Exercises 
* from exercises/
* 03 - `jest reversestring/test.js --watch`
* 04 - `jest palindrome/test.js --watch`
* 05 - `jest reverseint/test.js --watch`
* 06 - `jest maxchar/test.js --watch`
* 07 - `jest fizzbuzz/test.js --watch`
* 08 - `jest chunk/test.js --watch`
* 09 - `jest anagrams/test.js --watch`
* 10 - `jest capitalize/test.js --watch`
* 11 - `jest steps/test.js --watch`
* 12 - `jest pyramid/test.js --watch`
* 13 - `jest vowels/test.js --watch`
* 14 - `jest matrix/test.js --watch`
* 15 - `jest fib/test.js --watch`
* 16 - `jest queue/test.js --watch`
* 17 - `jest weave/test.js --watch`
* 18 - `jest stack/test.js --watch`
* 19 - `jest qfroms/test.js --watch`    //queue from stack

## Runtime Complexity (best to worst)
1. O(1) operations take constant time
2. O(logn) - half the operations on each step - searching operations
3. O(n) linear complexity 
    - iterating through all elements - linear complexity, 1 to 1 relationship between input vs work
    - iterating through half a collection is still O(n)
4. O(nlogn) - doubling the number of elements does not double the work - sorting algorithms 
5. O(n^2) quadratic complexity - nested for-loop - every element compared to every other element (same data)
6. O(2^n) - exponential time - adding a single element "doubles" the processing power required (dramatic increase)

O(n+n) - Complexity of iterating through 2 different sets of data
O(logn) - searting sorted array

## memoization
* store the arguments of each function call along with the result.
* if the function is called again with the same arguments, return the precomputed results, rather than running the function again
* see memoization.js 
* the keys for the cache object are the arguments we trying to call slowfib with

## Queue
* uses array, hides most functions except the ones we want to expose
* enqueue - unshift() / dequeue - pop()

## Stack 
* uses array
* push() - add from end, pop() remove from end

## LinkedLists
exercise/

* Node()
* LinkedList()
* InsertFirst()
* size()
* getFirst()
* getLast()
* clear()
* removeFirst()
* removeLast()
* insertLast()
* getAt(index) //zero indexed, returns node
* removeAt(index)
* insertAt(index)
* forEach(fn) //receives fn to execute on each element
* midpoint(list) //midpoint or item before midpoint if even
* circular(list)

## Generators
* running the code, numbers() returns a generator object
* when we define a generator, we call generator.next(); allows us to 'step through' the generator
* the code inside the generator will execute until a yield statement is found
* when yield is found, execution of that function is paused 
* the first time the generator executes all the way up to the yield statement and returns whatever was yielded,
* generator.next() can be called again to resume execution..and it will pass back what was passed in to continue execution
* calling generator.next() the return is {"done,true"}

```js
function* numbers(){
    const result = 1+1;
    return 20 + (yield result);
}

const generator = numbers();
generator.next(); //{"value":2, "done":false}
generator.next(10); //{"value":30, "done":true}
```

## Trees

exercise/tree

* unlimited number of children
* any data

## binary search tree (BST)
* 2 children 
* same data (number)
* left node is smaller, right node is larger

exercise/bst
exercise/validate

## Javascript - Events
exercise/events

## bubblesort
exercise/sorting

#### bubble sort 
worst case O(n^2)
difficulty: easiest

#### selection sort
worst case O(n^2)
difficulty: easier
description: find minimum, place in front of array, sort from array [1-size]

#### mergeSort 
worst case: O(nlogn)
difficulty: medium


