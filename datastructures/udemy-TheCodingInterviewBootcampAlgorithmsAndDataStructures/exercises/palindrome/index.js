// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//SOLUTION 2: using .reverse()
function palindrome(str) {
    let reverseStr = str.trim().split('').reverse().join('');
    return reverseStr === str;
}

//SOLUTION 1: using every()
// function palindrome(str){
//     return str.split('').every((char, i)=>{
//         return char === str[str.length-1-i];
//     });
// }


module.exports = palindrome;
