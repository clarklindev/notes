// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//SOLUTION3 : using regular expression
//regular expression.match() match anything inbetween []
//g means dont stop at first match
//i means case incensitive
//if finds something returns array,if doesnt find anything returns null
function vowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches? matches.length : 0;
}

//SOLUTION2: using includes(), which returns true or false

// function vowels(str){
//     let counter = 0;
//     // const testvowels = "aeiou";
//     const testvowels = ['a', 'e', 'i', 'o', 'u'];
//     for(let char of str.toLowerCase()){
//         if(testvowels.includes(char)){
//             counter++;
//         }
//     }
//     return counter;
// }

//SOLUTION 1: MY SOLUTION
//can incorporate includes() to make it better than SOLUTION2
// function vowels(str) {
//     return str.toLowerCase().split('').filter(char=>{
//         return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
//     }).length;
// }

module.exports = vowels;
