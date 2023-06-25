// 1. store the first element as the smallest value you've seen so far,
// 2. compare this item to the next item in the array until you find a smaller number
// 3. if a smaller number is found, designate that smaller number to be the new 'minimum'
//  and continue until the end of the array.
// 4. if the 'minimum' is not the value (index), you initially began with, swap the two values

//es6
function selectionSort(arr) {
  console.log(arr);
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log('i:', i, ' lowest:', lowest);
      swap(arr, i, lowest);
      console.log(arr);
    }
  }
  return arr;
}

//es5
// function selectionSort(arr){
//     console.log(arr);
//     for(var i=0; i< arr.length; i++){
//         var lowest = i;
//         for(var j=i+1; j< arr.length; j++){
//             if( arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             console.log('i:',i, ' lowest:',lowest);
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//             console.log(arr);
//         }
//     }
//     return arr;
// }

selectionSort([0, 2, 34, 22, 10, 19, 17]);
