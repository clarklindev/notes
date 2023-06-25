//recursive mergeSort
function mergeSort(arr) {
	console.log(`initial array: `, arr);
	//base case
	if (arr.length < 2) {
		return arr;
	}

	//divide and conquer
	let leftHalf = arr.slice(0, arr.length / 2);
	let rightHalf = arr.slice(arr.length / 2); //when odd number arr length, the right half is larger
	console.log("DIVIDING: ");
	console.log("leftHalf: ", leftHalf);
	console.log("rightHalf: ", rightHalf);
	let leftSorted = mergeSort(leftHalf);
	let rightSorted = mergeSort(rightHalf);
	// console.log('leftSorted: ', leftSorted);
	// console.log('rightSorted: ', rightSorted);

	//merge subarrays
	return merge(leftSorted, rightSorted);
}

function merge(left, right) {
	console.log(`merging: left [${left}], right [${right}]`);
	let result = [];
	//if you dont use index, you can use shift() which removes the items from the arrays
	let indexLeft = 0;
	let indexRight = 0;
	//while result is complete
	while (result.length < left.length + right.length) {
		//if all elements in left have been added, then add remaining right elements
		if (indexLeft === left.length) {
			result = result.concat(right.slice(indexRight));
		}
		//if all elements in right have been added, then add remaining left elements
		else if (indexRight === right.length) {
			result = result.concat(left.slice(indexLeft));
		}
		//compare elements in subarrays and add lower of two to result
		else if (left[indexLeft] <= right[indexRight]) {
			result.push(left[indexLeft++]);
		} else {
			result.push(right[indexRight++]);
		}
		console.log(`merge result: [${result}]`);
	}
	return result;
}

//console.log('final final: ', mergeSort([31,1,7,21,14,5,44]));

console.log(
	"final final: ",
	mergeSort([9, 66, 8, 75, 9, 2, 5, 74, 6, 21, 5, 99, 8, 5, 4, 2, 98, 56, 8])
);
