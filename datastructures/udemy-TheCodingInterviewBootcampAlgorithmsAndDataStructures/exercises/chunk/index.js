// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//SOLUTION 1 : MY SOLUTION
//alternatively use slice() but you need to keep an index of items removed
function chunk(array, size) {
    let finalArr = [];
    while(array.length){
        finalArr.push(array.splice(0,size));    //note second argument: An integer indicating the number of elements in the array to remove from start.
    }
    return finalArr;
}

//SOLUTION 2:
// function chunk(array, size){
//     const chunked = [];
//     for(let element of array){
//         const last = chunked[chunked.length-1];
//         if(!last || last.length === size){
//             chunked.push([element]);
//         }else{
//             last.push(element);
//         }
//     }
//     return chunked;
// }

module.exports = chunk;
