function reverseString(str) {
	//option 1
	var strArr = str.split('');
	strArr.reverse();
	return strArr.join('');
	return strArr
		.split('')
		.reverse()
		.join('');
	//------------------------------------------
	//option 2 - decreasing for-loop
	// let revString = '';
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	revString = revString + str[i];
	// }
	// return revString;
	//------------------------------------------
	//option 3 - increasing for-loop
	// let revString = '';
	// for (let i = 0; i <= str.length - 1; i++) {
	// 	revString = str[i] + revString;
	// }
	// return revString;
	//------------------------------------------
	//option 4 - for-of method
	// let revString = '';
	// for (let char of str) {
	// 	revString = char + revString;
	// }
	// return revString;
	//------------------------------------------
	//option 5 - forEach
	// let revString = '';
	// str.split('').forEach(function(char) {
	// 	revString = char + revString;
	// });
	// return revString;
	//------------------------------------------
	//option 6 with ES6
	// let revString = '';
	// str.split('').forEach(char => (revString = char + revString));
	// return revString;
	//------------------------------------------
	//option 7 reduce()
	// return str.split('').reduce(function(revString, char) {
	// 	return char + revString;
	// }, '');
	//------------------------------------------
	//option 8 reduce() with ES6
	//return str.split('').reduce((revString, char) => char + revString, '');
}

//------------------------------------------
//isPalindrome
function isPalindrome(str) {
	const revString = str
		.split('')
		.reverse()
		.join('');
	return revString === str;
}
//------------------------------------------
//reverseInteger - Math.sign() keeps negative number sign
function reverseInt(int) {
	const revString = int
		.toString()
		.split('')
		.reverse()
		.join('');
	return parseInt(revString) * Math.sign(int);
}
//------------------------------------------
//return a string with the first letter of every word capitalized
function capitalizeLetters(str) {
	// const strArr = str.toLowerCase().split(' ');
	// for (let i = 0; i < strArr.length; i++) {
	// 	strArr[i] =
	// 		strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	// }
	// return strArr.join(' ');
	//------------------------------------------
	//option 2
	return str
		.toLowerCase()
		.split(' ')
		.map(function(word) {
			return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');
	//------------------------------------------
	//option 3 - regular expression \b(word boundary), /g(global), i(case-incensitive)
	// return str.replace(/\b[a-z]/gi, function(char) {
	// 	return char.toUpperCase();
	// });
	//------------------------------------------
}
//------------------------------------------
//max character
//return the character that is most common in a string
function maxCharacter(str) {
	const charMap = {};
	let maxNum = 0; //the max number of occurances of a char
	let maxChar = ''; //char with most occurance of letter

	str.split('').forEach(function(char) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	console.log(charMap);

	for (let char in charMap) {
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}
//------------------------------------------
//fizzbuzz
//write a program that prints all the numbers from 1 to 100.
//for multiples fof 3, instead of the number, print 'Fizz',
//for multiples of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5, print
//'fizzBuzz'

function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
//------------------------------------------
//longest word - return the longest word of a string - when more than one word, return an array
//strip punctuation,
//then sort by length
function longestWord(sen) {
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
	console.log(wordArr);

	//sort by length
	const sorted = wordArr.sort(function(a, b) {
		return b.length - a.length;
	});

	//if multiple words, put in array
	const longestWordArr = sorted.filter(function(word) {
		return word.length === sorted[0].length;
	});

	//check if more than one array val
	if (longestWordArr.length === 1) {
		//return the word
		return longestWordArr[0];
	} else {
		return longestWordArr;
	}
}
//------------------------------------------
//array chuncking
//split an array into chuncked arrays of a specific length
//eg chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]]
//eg chunkArray([1,2,3,4,5,6,7],2) === [[1,2],[3,4],[5,6],[7]]
function chunkArray(arr, len) {
	//SOLUTION 1
	// //initialize chunked arr
	// const chunkedArr = [];
	// //set index
	// let i = 0;
	// //loop while index is less than the array length
	// while (i < arr.length) {
	// 	//slice out from the index to the index + the chunk length
	// 	//and push onto the chunked array
	// 	chunkedArr.push(arr.slice(i, i + len));
	// 	//increment by chunk length
	// 	i += len;
	// }
	// return chunkedArr;
	//-------------------------------------------------
	//SOLUTION 2
	const chunkedArr = [];
	arr.forEach(function(val) {
		//get last element
		const last = chunkedArr[chunkedArr.length - 1]; //first iteration returns undefined
		//check if last OR if last length is equal to the chunk len
		if (!last || last.length === len) {
			chunkedArr.push([val]);
		} else {
			last.push(val);
		}
	});

	return chunkedArr;
}
//------------------------------------------
//flatten array
//take an array of arrays and flatten to a single array
//eg. [[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]

function flattenArray(arrays) {
	//SOLUTION 1
	// return arrays.reduce(function(a, b) {
	// 	return a.concat(b);
	// });
	//--------------------------------
	//SOLUTION 2 - apply() takes single array and passes all elements of an array
	//return [].concat.apply([], arrays);
	//--------------------------------
	//SOLUTION 3 - using spread operator
	return [].concat(...arrays);
}
//------------------------------------------
//anagram
//returns true if anagram and false if not
//anagram, letters can be jumbled to make another word
//split the words, sort, join and if the two strings equal then it is an anagram
function isAnagram(str1, str2) {
	return formatStr(str1) === formatStr(str2);
}

//helper functions
function formatStr(str) {
	return str
		.replace(/[^\w]/g, '') //take out anything that is not a word character (letter or number) and replace with empty string ''
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}
//------------------------------------------
//letter changes
//change every letter of the string to the one that follows in and capitalize the vowels
//z should return A
//eg. 'hello there' should return 'Ifmmp UIfsf'
function letterChanges(str) {
	let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
		if (char == 'z' || char === 'Z') {
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	}); //global and case incensitive
	newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
		return vowel.toUpperCase();
	});
	return newStr;
}
//------------------------------------------
//Ordinal suffixes - give suffixes for each day of the month
//eg. 1st, 2nd, 3rd, 4th, 5th, 6th ...30th, 31st...
//RULES
// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// th is used for all other numbers (e.g. 9th, pronounced ninth).
function ordinalSuffix(val) {
	var j = val % 10,
		k = val % 100;
	if (j == 1 && k != 11) {
		return val + 'st';
	}
	if (j == 2 && k != 12) {
		return val + 'nd';
	}
	if (j == 3 && k != 13) {
		return val + 'rd';
	}
	return val + 'th';
}

//----------------------------------------------------
var romanMatrix = [
	[1000, 'M'],
	[900, 'CM'],
	[500, 'D'],
	[400, 'CD'],
	[100, 'C'],
	[90, 'XC'],
	[50, 'L'],
	[40, 'XL'],
	[10, 'X'],
	[9, 'IX'],
	[5, 'V'],
	[4, 'IV'],
	[1, 'I']
];

function convertToRoman(num) {
	if (num === 0) {
		return '';
	}
	for (var i = 0; i < romanMatrix.length; i++) {
		if (num >= romanMatrix[i][0]) {
			return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
		}
	}
}
//RUN ALL examples...

//const output = reverseString('hello');
//const output = isPalindrome('poop');
//const output = reverseInt(-3242355);
//const output = capitalizeLetters('my name is Clark');
//const output = maxCharacter('javascript');
//const output = fizzBuzz();
//const output = longestWord('my name is Clark');
//const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
//const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
//const output = isAnagram('elbow', 'below');
//const output = letterChanges('Hello Therez');
const output = convertToRoman(334);
console.log(output);

//CMD:
//node js/script.js
