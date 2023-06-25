// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=lesser;                
            }
        }
    }
    return arr;
}

//loop through array, findMin 

function selectionSort(arr) {
    for(var i=0; i< arr.length; i++){
        let indexOfMin = i;
        for(var j=i+1; j< arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    console.log(`initial array: `, arr);
    //base case
    if(arr.length<2){
        return arr;
    }

    //divide and conquer
    let leftHalf = arr.slice(0, arr.length/2);  //slice takes everything upto but no including end value
    let rightHalf = arr.slice(arr.length/2);    //when odd number arr length, the right half is larger
    console.log('DIVIDING: ')
    console.log('leftHalf: ', leftHalf);
    console.log('rightHalf: ', rightHalf);
    let leftSorted = (leftHalf.length>1)? mergeSort(leftHalf):leftHalf;
    let rightSorted = (rightHalf.length>1)? mergeSort(rightHalf):rightHalf;
    // console.log('leftSorted: ', leftSorted);
    // console.log('rightSorted: ', rightSorted);

    //merge subarrays
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    console.log(`merging: left [${left}], right [${right}]`)
    let result = [];
    //if you dont use index, you can use shift() which removes the items from the arrays
    let indexLeft = 0;
    let indexRight = 0;
    //while result is complete
    while (result.length < (left.length+right.length)){
        //if all elements in left have been added, then add remaining right elements
        if(indexLeft === left.length){
            result = result.concat(right.slice(indexRight));
        }
        //if all elements in right have been added, then add remaining left elements
        else if(indexRight === right.length){
            result = result.concat(left.slice(indexLeft));
        }
        //compare elements in subarrays and add lower of two to result
        else if(left[indexLeft] <=right[indexRight]){
            result.push(left[indexLeft++]);
        }
        else{
            result.push(right[indexRight++]);
        }
        console.log(`merge result: [${result}]`)
    }
    return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
