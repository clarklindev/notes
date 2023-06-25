// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 3 
//using reduce
function reverse(str) {
    return str.split('').reduce((rev, char)=> char + rev,'');
}

// SOLUTION 2
//create an empty string called 'reversed',
//for each character in the provided string
    //take the character and add it to the start of 'reversed'
//return the variable 'reversed'
// function reverse(str) {
//     let reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// SOLUTION 1
//using array's built in function .reverse()
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverse;
