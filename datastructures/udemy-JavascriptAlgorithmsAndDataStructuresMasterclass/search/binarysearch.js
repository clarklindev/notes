function binarySearch(arr, elem) {
  //pointers
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem) {
    console.log(start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1; //reposition end index
    } else {
      start = middle + 1; //reposition start index
    }
    middle = Math.floor((start + end) / 2); //new middle
  }
  console.log(start, middle, end);

  return arr[middle] == elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
