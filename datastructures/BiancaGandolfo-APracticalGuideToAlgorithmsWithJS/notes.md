## Notes

### Closure
* when you assign a function to a variable so that it can be called AGAIN at a later stage and inside all variable values at the time of assigment are intact
* the closure hides variables to outside by scoping it internally to the context of the function (making it private).
* the closure function ALSO returns another function exposing it to the outside
* when calling the closure function again, the returned functions' variables are re-initialized BUT variables in the context of the closure function scope retain its property values.

```js

log = (n)=>{
    console.log(n);
};

const closureVar = memoizeFunction(log);
closureVar(10);

const memoizeFunction = (fn)=>{
    //closure variables stay the same
    let cache = {};

    //re-initialize with new input on re-use
    return (...args){
        if(cache[args]){
            return cache[args];
        }
        //do something with args
        let result = fn(...args);
        cache[args]=result;
        return result;
    };
};
```

## Recursion

* recursion prevents repeating yourself (DRY - dont repeat yourself)

### steps
1. push called Fn on stack, 
2. identify base case
3. identify recursive case
    - Execute Fn body until...another function is called
    - pause the current execution and start at step 1
4. return where appropriate
    - then pop the current function off the stack
    - resume executing the previous fn
5. write procedures for each case that bring you closer to the base case

### Patterns for Recursion

* Wrapper functions
    - passing a value to recursive function each time

* Accumulator functions
 - as we build a solution we keep passing the accumulated value

### Merge sort
* time comlexity (nlogn)
* pseudocode - mergeSort(list){
    //O(1)
    initialize n to the length of the list
    base case is if n < 2, just return
    initialize mid to n/2

    //N/A
    left = left slice of array to mid -1
    right = right slice of array mid to n-1

    //O(n/2)
    mergeSort(left)
    mergeSort(right)

    //O(n)
    merge(left, right, arr);
}

### Greedy algorithm

* locally optimal solution - always picking smallest choice
* good for large data set

* Q: write a function, makeChange that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5

//coin values 5, 10, 25
const makeChange = (coins, amount)=>{
     
}

* see greedy.js

### Brute force
calculate every single combination possible and keep track of the minimum
- time complexity O(2^n)

### Dynamic programming
* optimization technique where it remembers repeated calculations
* cache values to avoid repeated calculations via memoization
