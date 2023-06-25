// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/RegExp

//SOLUTION 1: using alpabetical order of .sort() and if the strings are equal then they are anagrams
function anagrams(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

//SOLUTION 2: using character map
// function buildCharMap(str){
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     let charMapA = {};
//     let charMapB = {};

//     let a = buildCharMap(stringA);
//     let b = buildCharMap(stringB);

//     if(Object.keys(a).length !== Object.keys(b).length){
//         return false;
//     }
    
//     for(let char in a){
//         //compare count
//         if(a[char] !== b[char]){
//             return false;
//         }
//     }
//     return true;
// }


module.exports = anagrams;
