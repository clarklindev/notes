## Big-O-Notation
* clasify how scalable an algorithm or function is,
* estimate worst case runtime
* how much slower an algorithm will run if input size grows eg 100 elements instead of 50
 
### constant runtime
* eg. array[0], array[1] 
* Big O: runtime is "0 (1)" 
* as we increase size of array, the time to run never changes

### linear runtime
* number elements increase, so does time
* Big O: runtime is "0 (n)"

### exponential runtime
* forloop in forloop
* every entry in the input, a calculation is made on every other element in the input
* Big O: runtime is "0 (n^2)"
* very inefficient

### logarithmic runtime
* very performant
* eg. binary search with sorted array, key to search
* every operation, we cut input in half
* dictionary search example
* as input grows, operations grow logarithmically
* Big 0: runtime is "O (log n)"

### Efficiency order (most efficient to least efficient):
* 0(1), 0(log n), 0(n), 0(n^2)