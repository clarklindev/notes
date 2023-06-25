//basic implementation
function bubbleSortBasic(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;
    for(var i=0;i< array.length; i++){
        counterOuter++;
        for(var j=1; j< array.length; j++){
            counterInner++;
            if(array[j-1] > array[j]){
                countSwap++;
                swap(array, j-1, j);
            }
        }
    }
    console.log('outer: ', countOuter, 'inner:', countInner, 'swap:', countSwap);

    return array;
}

//optimized - keeping an eye on if swapping has been performed, if not in an iteration, then its sorted

function bubbleSort(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    var swapped;

    do{
        counterOuter++;
        swapped = false;

        for(var i=0; i< array.length; i++){
            counterInner++;
            if(array[i] && array[i+1] && array[i] > array[i+1]){
                countSwap++;
                swap(array, i, i+1);
                swapped = true;
            }
        }
    }
    while(swapped);
    console.log('outer: ', countOuter, 'inner:', countInner, 'swap:', countSwap);
    return array;
}
