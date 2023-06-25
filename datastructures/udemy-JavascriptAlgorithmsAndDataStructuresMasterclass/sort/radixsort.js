function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

//figure out how many digits in a number
function digitCount(num) {
  if (num === 0) {
    //this caters for Math.log(0) which returns infinity
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//times to check to do radix sort keep track of digits of largest number
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    let digitcount = digitCount(nums[i]);
    console.log('digitcount: ', digitcount);
    maxDigits = Math.max(maxDigits, digitcount);
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  console.log('max digit count: ', maxDigitCount);
  //base 10 shift iterations
  for (let k = 0; k < maxDigitCount; k++) {
    console.log(`digit:${k}=============`);
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
