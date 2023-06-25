//non-recursive romanize
//go through list of lookups, take the number and divide by that lookup, but floor the answer,
//this will either give you 0 if its less than the lookup
//or a number representing how many times it is divisible by that number,
//for how many times it is divisible, add to the final string, the lookup equavalent
//then we can remove this set of numbers from the calculation
function romanize(num) {
	var lookup = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	var str = "";

	for (var i of Object.keys(lookup)) {
		var q = Math.floor(num / lookup[i]);
		num -= q * lookup[i];
		let calc = i.repeat(q);
		str += calc;
		console.log('calc: ', calc);
	}
	
	console.log(`num: ${num}, romanize: ${str}\n`);
	return str;
}
romanize(1503);

//deromanize rules:
//Function shifts (remove from front) element at a time, compares to new front of str
//When a symbol appears after a larger (or equal) symbol it is added
//But if the symbol appears before a larger symbol it is subtracted

function deromanize(str){
	let lookup = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}
	let roman = str.toUpperCase().split('');
	let num = 0;
	let val;

	while (roman.length){
		val = lookup[roman.shift()];	//remove from roman values
		let calc = val * (val < lookup[roman[0]] ? -1 : 1);//compare to new head of roman, less subtract, more add
		console.log('calc: ', calc);
		num += calc;
	}
	console.log(`val: ${str}, deromanize: ${num}`);
	return num;
}

deromanize('MIX');