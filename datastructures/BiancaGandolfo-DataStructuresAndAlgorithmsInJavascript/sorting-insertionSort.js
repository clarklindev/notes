
//INSERTION SORT
/*
*** Description
Iterate over array and grow a sorted array behind current element.
For each position, compare value of element with previous elements and swap positions if previous element is larger.
example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element
*** Exercises
- Implement insertion sort for array of numbers
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)
*/

//insertionSort
function insertionSort(list){
    console.log('list: ', list);
    let sortedArr = [list[0]];
    
    while(sortedArr.length <= list.length-1){
        sort(list[sortedArr.length]);  //step1: length is 1, sort(sends value of list[1])
    }
    console.log('final answer: ', sortedArr);
    return sortedArr;
    
    //returns sortedArr with itemToCheck added;
    function sort(itemToCheck){
        let insertPos = 0;
        console.log('sortedArr before: ', sortedArr, 'itemToCheck:', itemToCheck);
        for(let [index, item] of sortedArr.entries()){
            console.log(`item: ${item}, index in loop: ${index}`);

            //step2: if its less, add before
            if(itemToCheck < item){  
                insertPos = index;
                console.log('insertPos less, updated: ', insertPos);                                       
                if(insertPos < 0) { insertPos = 0};
                break;
            }
            //step2: if its more, add after
            else if(itemToCheck >= item){                
                insertPos = index+1;
                console.log('insertPos greater, updated: ', insertPos);                                       
            }
        };
        console.log('insertPos: ',insertPos);

        //step3: insert at pos before or after itemToCheck, therefore grows sortedArr
        sortedArr.splice(insertPos, 0, itemToCheck);
        console.log('sortedArr after: ', sortedArr);
    }
}

insertionSort([7,8,5,2,4,6,3]);

//insertion sort with comparator
var insertionSortWithComparator = function(array, comparator){
    comparator = comparator || defaultComparator;

    //start at index 1 as sublist of array[0] is already sorted
    for(var index=1; index< array.length; i++){
        var value = array[index];
        var compareIndex = index -1;
        while(compareIndex>-1 && comparator(array[compareIndex], value) > 0){
            array = swap(array, compareIndex, index);
            index = compareIndex;
            compareIndex--;
        }
    }
    return array;
}
