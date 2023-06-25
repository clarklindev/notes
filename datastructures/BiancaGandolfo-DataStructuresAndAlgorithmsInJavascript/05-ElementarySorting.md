## Elementary Sorting
* https://visualgo.net/en/sorting
* https://bost.ocks.org/mike/algorithms/
* https://www.youtube.com/playlist?list=PLqM7alHXFySHrGIxeBOo4-mKO4H8j2knW
    heap, quick, insertion, merge, selection, counting, Bubble, radix, bucket, shell, tree, comb
* Bubble, Insert, Selection

### Bubble Sort
* Compares adjacent elements and 'bubbles up' largest
* https://en.wikipedia.org/wiki/Bubble_sort
* https://github.com/kuychaco/algoClass/blob/solutions/sorting-algorithms/bubble.js
* compares adjacent values
* swops larger one to the end
* function that returns a sorted list
* time complexity: 0(n^2) ...slow
* space complexity 0(1)
* stable? no
* adaptive? yes

Pseudocode:
```js
for k, loop through 1 to n-1			    //O(n-1)
	for i loop 0 to n-2					    //O(n-1)
		if A[i] is greater than A[i+1]		//O(1)
			swap A[i] with A[i+1]		    //O(1)
```
* for nested loops multiply: (n-1)*(n-1)
* for side by side add: O(1) //c for constant
* then multiply the two (n-1)(n-1) * c
* use a polynomial expander: https://www.mathportal.org/calculators/polynomials-solvers/polynomials-expanding-calculator.php
* solution: c(n^2)- 2cn+1, discard the irrelevant parts = O(n^2)

### Cocktail Sort 
* https://en.wikipedia.org/wiki/Cocktail_sort
* Cocktail sort is a variant of bubblesort where it does compare and moves larger element to the top, but also does a compare at the end in reverse to find smaller and moves it to the front

### Stability and Adaptability
* a sorting algorithm is stable if it preserves the order of equal items
* ie. given that some items are equal values of comparison, it will still maintain
order based on a secondary property  
* any comparison-based sorting algorithm can be made stable by using POSITION
as a criteria when two elements are compared

#### Stability example
* I want bicycles sorted by PRICE (ascending)
* eg. given equal prices, i want lighter option to be first
* the list is already sorted by weight(ascending), I just need to sort it by price. But an unstable sort based on price could "unsort" weights

#### Adaptability example
* a sorting algorithm is 'adaptive' if it becomes more efficient (ie. complexity is reduced) when the input is already nearly sorted.
* if your list is almost sorted, is it more efficient, or just as inefficient whether sorted or not

### Selection and Insertion Sort

#### Selection Sort (not in place ie. creates a new array)
* ALWAYS selects the smallest element in an array, pushes it into a new array
* space complexity, this isnt good because it makes a new array
* [1,6,8,2,5] sorts to [1,2,5,6,8]
* time complexity: O(n^2)

#### Selection Sort (in place ie. uses same array)
* selects the largest element in an array, swaps it to the end of the array
* time complexity: O(n^2)

#### Insertion sort
* Selects the first element in an array, pushes it into a new array
* as each new element is added, insert the new element in the correct order
* basically it just takes the next element in the array and puts it new array comparing at each position is it greater/less. 
* in Selection sort it took the next smallest item in the array
* It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

* Properties:
* O(1) extra space
* Time complexity:
    - worst: O(n^2) comparisons and swaps
    - best: O(n) when nearly sorted
* stable
* adaptive - O(n) time when nearly sorted
* Use cases: When the data is nearly sorted (since it's adaptive) or when the problem size is small (because it has low memory overhead)

#### Insertion Sort (in place ie. uses same array)
* Selects the first element in an array, considers that our sorted list of size 1.
* as each new element is added, insert the new element in the correct order by swapping in-place
* How?
- Set a marker for the sorted section after first element
- repeat the following until unsorted section is empty
    - select the first unsorted element
    - swap other elements to the right to create the correct position and shift the unsorted element
    - advance the marker to the right one element