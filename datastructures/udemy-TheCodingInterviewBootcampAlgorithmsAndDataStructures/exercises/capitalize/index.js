// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//SOLUTION 1 - MY SOLUTION: capitalize the word
function capitalize(str) {
    let answer = str.split(' ').map(word=>{
       return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
    return answer;
}

//SOLUTION 2 - capitalize by char comparison
// function capitalize(str) {
// 	let answer = str.split("").map((char, i) => {
// 		if (i === 0) {
// 			return char.toUpperCase();
// 		} else {
// 			return str[i - 1] === " " ? char.toUpperCase() : char;
// 		}
// 	});
// 	return answer.join("");
// }
module.exports = capitalize;
