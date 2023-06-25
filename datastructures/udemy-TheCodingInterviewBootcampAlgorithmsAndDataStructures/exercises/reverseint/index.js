// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//SOLUTION 2: USING MATH.SIGN(n) if n<0 returns -1
function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

//SOLUTION 1: MY SOLUTION
// function reverseInt(n) {
//     let prepend = (n < 0 ) ? '-':'';
//     if (n<0){
//         n = n * -1; //make it possitive
//     }
//     n = n.toString().split('').reverse().join('');
//     return parseInt(prepend+n);
// }

module.exports = reverseInt;
