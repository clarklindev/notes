# Sorting Algorithms
* these algorithms in this section are sub-quadratic time
* these algorithms can take more data and sort

## divide and conquer types (Merge, Quick,...)
    * probably will use recursion
    * recognize a base case
    * divide - take a problem and subdivide into smaller steps, 
    * conquer - work on each substep
    * combine - and then combine at end to get solution
    
### Merge Sort
* at combine state - it receives 2 sorted lists, 
* most sorting happens at the merging
    - worst case: O(nlogn)
    - not in place sorting
    - O(n) space complexity

* how it works?
#### PART1: divide state:
Pseudo Code:

MergeSort(list){
    * initialize n to length of list
    * initialize mid to n/2
    * base case: if list.length < 2, return
    * break the list into halves L & R
        - left = left slice of array to mid -1
        - right = right slice of array mid to n-1
    * Lsorted = mergeSort(left)
    * Rsorted = mergeSort(right)
    return merge(Lsorted, Rsorted)
}

#### PART2: conquer + combine state: Merge Routine - receives 2 sorted arrays
Pseudo Code:

merge(Lsorted, Rsorted){
    * create 2 pointers one for left and the right
    * create an array to put sorted values
    Looping (continue until pointerL+pointerR === Lsorted.length+Rsorted.length)
        * add if(pointerL < Lsorted.Length){} check 
        * add if(pointerR < Rsorted.Length){} check
        * compare them to each other, the smaller one gets pushed to a new array
        * and that array that it came from, the pointer moves up one (increment)
        * another comparision happens
}
### Time Complexity of Merge sort
MergeSort(list){
    * initialize n to length of list            //constant
    * initialize mid to n/2                     //constant
    * base case: if list.length < 2, return     //constant
    * break the list into halves L & R
        - left = left slice of array to mid -1      //NA
        - right = right slice of array mid to n-1   //NA
    * Lsorted = mergeSort(left)        //n/2
    * Rsorted = mergeSort(right)       //n/2
    return merge(Lsorted, Rsorted)      //linear (n) for merge, 
}

//f(n) = c1 + n + 2(n/2) + c2
       = O(n*logn)      //we dont throw away n because it is relavant



<!-- =============================================== -->

### Quick Sort
* in-place sorting
* O(nlogn) - average case running time n..looping through whole array, logn (recursive)
* O(n^2) - worst case
* adaptive - no
* stable - no

### Futher studies
* multi pivot quicksort
* external quicksort
* three-way radix quicksort

### How?
    Goal: to move the pivot to its sorted place in the array, 
    smaller to left of pivot, larger to right of pivot 
 
* the key to figuring how quicksort() works is in the partition function
* you are looping through the array from startIndex to endIndex
* you pick a pivot (last element) to compare to while looping through array
* and you are keeping track on a partitionLoc variable (intially startIndex)
* while looping through array, if value at arr[i] is less than the pivot (last element)
* you want to swap arr[i] with the partitionLoc 
* increment partitionLoc
* when the loop completes, swap pivot with partionLoc

#### STEP1: PARTITION LIST (recursion)
    1. partition(arr, startIndex, endIndex){}, we use the same array, so we updating indexes to track partition begin and partition end (LEFT and RIGHT of pivot)
    2. choose pivot point(endIndex) and get it to its rightful position
    3. pIndex = startIndex
    4. loop through array, move smaller things to left, larger things to right

#### STEP2:     
    1. you recursively call partition() on left and right of pivot
    2. the left will be (0 to left-of-pivot) AND right will be (right-of-pivot to end)
    3. if there is only 2 element after the moving then stop, else partition list (STEP1)

### Code
* sorting-quickSort.js
