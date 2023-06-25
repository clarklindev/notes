    function quickSort(arr, startIndex=0, endIndex=arr.length-1){
    //you will see that when its only one element, the startIndex > endIndex
    if(startIndex < endIndex) 
    {
        //partition() returns index of pivot    
        console.log(`arr before partition: ${arr}, startIndex: ${startIndex}, endIndex: ${endIndex}`);    
        let pivot = partition(arr, startIndex, endIndex) 
        console.log(`PIVOT VALUE: ${arr[pivot]}`)
        console.log(`arr after partition: ${arr}`);               
        console.log(`LEFT: startIndex:${startIndex}, endIndex:${pivot-1}`);
        console.log(`RIGHT: startIndex:${pivot+1}, endIndex:${endIndex}`);
        console.log(`___`)
        //left of pivot
        let left = arr.slice(startIndex, pivot);   //slice() doesnt include last element
        console.log('left:', left);
        if( left.length >= 2){
            quickSort(arr, startIndex, pivot-1);
        }
                
        //right of pivot     
        let right = arr.slice(pivot+1, endIndex+1);//slice() doesnt include last element     
        console.log('right:', right);
        if(right.length >= 2) {
            quickSort(arr, pivot+1, endIndex);
        }

        //only return arr for original call of quickSort()
        if(endIndex-startIndex === arr.length-1){
            console.log('final array: ', arr);
            return arr;
        }
    }
    else{
        console.log(`[${arr}] , startIndex: ${startIndex}, endIndex: ${endIndex}`);               
    }
 
}

//pivotLoc only increments when arr[i] <= pivot value
function partition(arr, startIndex, endIndex){
    console.log('partition')
    let pivot = arr[endIndex];
    let pivotLoc = startIndex;

    //scan from startIndex to endIndex-1 (basically one position before pivot)
    for(let i = startIndex; i < endIndex;i++)
    {
        //if the data at arr[i] is less than pivot value 
        if(arr[i] <= pivot) 
        {
            //swap the item at arr[i] with pivotLoc
            swap(arr, i, pivotLoc);
            pivotLoc++;
        } 
    }
    swap(arr, pivotLoc, endIndex);
    return pivotLoc;
}

//takes in indexs of array and swaps values
function swap(arr, a,b){
    if( a=== b ){
        return;
    }
    let temp =arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

//quickSort([7,2,1,6,8,5,3,4]);
//quickSort([6,3,4,8,7,2,9,1]);
quickSort([9,14,2,7,1,4,6])