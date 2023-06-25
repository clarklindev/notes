// Please include your answers in this doc directly)
// Question 1
// ● Given a string of integers separated by spaces, return the place of the integer with different
// parity.
// Parity means is a number odd or even.
// Constraints:
// ● All numbers except the outlier will have the same parity.
// ● The numbers will all be positive integers less than 10^9.
// ● The string will contain at least 3 numbers.
// Examples:
// inputString1 = "10 9 8 6 4 2"
// inputString2 = "7 9 1 6 3 5"
// console.log(findOutlier(inputString1)) // 2 (return the position 2 (index 1) )
// console.log(findOutlier(inputString2)) // 4 (position 4 index 3)

const findOutlier = (str) => {
  //turn string into array of numbers
  const arr = str.split(' ');

  //sample
  const slicedArr = arr.slice(0, 3);

  const evens = slicedArr.filter((each) => each % 2 === 0).length;
  const odds = slicedArr.length - evens;

  //get parity
  const groupParity = evens > odds ? 0 : 1;

  const outlierIndex = arr.findIndex((each, index) => {
    return each % 2 !== groupParity; //find odd one out
  });

  return outlierIndex + 1;
};

console.log(findOutlier('10 9 8 6 4 2'));
console.log(findOutlier('7 9 1 6 3 5'));
