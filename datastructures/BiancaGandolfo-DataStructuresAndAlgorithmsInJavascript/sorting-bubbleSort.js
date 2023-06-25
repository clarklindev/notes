/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

//Bubble sortinghttps://en.wikipedia.org/wiki/Cocktail_sort
//https://en.wikipedia.org/wiki/Bubble_sort
//https://github.com/kuychaco/algoClass/blob/solutions/sorting-algorithms/bubble.js
//uses a temporary variable to store the larger of 2 comparisons
//time complexity: O(n^2)
//optimization: using a variable to cut down on number of elements to check in the inner loop by 1 on every iteration
//use a wall analogy, here toCheckCount...
function bubbleSort(list) {
	let sortedCount = 0;
	let toCheckCount = list.length;
	console.log(`original: `, list, `, toCheckCount: ${list.length}, sorted: ${sortedCount}`);
	//wall
	for(let i=1; i< list.length-1; i++){	//check is to -1 because you dont need to check the first element against itself
		for(let k=0; k<toCheckCount-1; k++ ){
			if(list[k] > list[k+1]){
				let temp = list[k];
				list[k] = list[k+1];
				list[k+1] = temp;
				console.log("swoped:   ", list)
			}
			else{
				console.log("skipped:  ", list)
			}
		}
		toCheckCount--;
		sortedCount++;
		console.log(`loop ${i} : ${list}, next toCheckCount: ${toCheckCount}, sorted: ${sortedCount}`)
	}
	console.log('final answer: ', list);
	return list;
}
//testing bubbleSort
bubbleSort([5,3,1,5,7,8,4]);