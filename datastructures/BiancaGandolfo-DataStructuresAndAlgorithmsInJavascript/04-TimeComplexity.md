## Time Complexity

### Space vs Time Complexity
* Runtime
* Space complexity (how much space)
* Time complexity (how many comparisons are made, how many swops more do you have to when the dataset grows)
* with respect to input size
* always assume worst case scenario

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

### Calculating Time Complexity / Understanding Big-O

1. 
* BigO: O(2^n), quadratic, any nested foreloop, like a loop inside a loop
* Number of operations: n^2 complexity 
* Algorithm: for unsorted data, as the number of columns x rows grow, the complexity is n squared as there are (X x Y) comparisons, speed - slow

2. 
* BigO: O(n), linear, we drop any non-significant digits
* Number of operations: 2n
* Algorithm: find min and max complexity
(n) is the number of hotels, and 2 operations per loop, so 2n
eg. for(var i=0; i< hotels.length; i++){
    isMax();
    isMin();
}

3. 
* BigO: O(1), constant
* Number of operations: 2
* Algorithm: sorted list, find first and last

#### Speed - Fastest to slowest
* anything above O(n) is considered a bad algorithm
* quadratic algorithm, double the number of operations -> quadripple the time
* linear algorithm, double the number of operations -> double the time
* constant algorithm, double the number of operations -> doesnt matter as time is constant

1. O(1) / constant 
2. O(logn) / logarithmic = as dataset grows, cutting problem in half everytime (trees)
3. O(n) / linear
4. O(n^2) / quadratic //loop within a loop
5. O(n^3) / n cubed  //3 loops looping over same data-set, this is exponential
6. O(k^n) / exponential 

### Calculating Big-O of JS Operations
* arr.push()            //O(1)
* arr.pop()             //O(1)
* l+3                   //O(1)
* for()                 //O(n)
* arr.unshift()         //O(n)  //note: unshift, adds element to beggining, shifts everything else up one 

### Calculating Big-O of Loops
* Combining time to calculate time complexity
* if its inside a loop (recursive or each other), multiply
* if its next to each other, plus
* drop any non significant digits and assume worst case

### Exercise Time Complexity
#### Calculate the time Complexity
```js
var countChars = function(str){
    var count = 0; //O(1)
    for(){        //O(n)
        count++;    //O(1)
    }
    return count;   //O(1)
}
countChars()    //O(n)
countChars()    //O(n)  //calling it twice doesnt mean anything

//answer: O(1)+O(n)*O(1)+O(1)=O(n)
```

```js
var countChars = function(str){
    return str.length;  //O(1)      //property lookup O(1)
}
countChars() //O(1)
countChars()    //O(1)

//answer:O(1) + O(1) = O(1)
```

```js
var myList = ['hello', 'hola']; //O(1)

myList.push();  //O(1)

myList.unshift();   //O(n)

//answer: O(1) + O(1) + O(n) = O(n)
```
