//optimized bubblesort - i starts at arr.length, j < i-1 on each loop,
//keep tab on swaps, if previous loop has no swaps, then sorted
//es6 syntax for sort
//O(n^2)
function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log('one pass completed!', arr);
    if (noSwaps) {
      break;
    }
  }

  return arr;
}

//not optimized bubble sort: 2 nested forloops, highest is already sorted on each loop
// function bubbleSort(arr){
//     for(var i=0; i< arr.length; i++){
//         for(var j=0; j < arr.length; j++){
//             console.log(arr);
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

bubbleSort([37, 45, 29, 8, 12, 88, -3]);
