function insertionSort(arr) {
  //go through the length of array
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    //j is one before i at each i loop, so whatever iteration i is on, j will go from that to 0
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //keep moving items arr[j] to arr[j+1] if its greater than currentVal
      arr[j + 1] = arr[j];
    }
    //else if it reaches here it means where arr[j] was is where currentVal should go
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
