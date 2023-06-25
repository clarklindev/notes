//cocktail sort
//keeps track of sorted items at HEAD and TAIL of list
//sort up finding largest in remaining list
//sort down finding smallest in remaining list
//skippedAll=true, keep track of it, if a swap is made, skippedAll is false, 
//if on up/down loop and after all iterations if skippedAll is still true, then list is sorted
function cocktailSort(list){
	console.log(`original: `, list,`\n`);
	
	let sortedAtHead = 0; //number of sorted items
	let sortedAtTail = 0;
	let toRightCheckCount = list.length;//number of items to check
	let toLeftCheckCount = list.length;
	
	//loop through all list items
	for(let i=1; i< list.length-1; i++){	
		let skippedAll = true;
		//sort up - find largest
		console.log(`loop UP ${i}, include: [${list.slice(sortedAtHead, list.length-sortedAtTail)}], sortedAtHead:${sortedAtHead}, sortedAtTail:${sortedAtTail}`);
		for(let k=sortedAtHead; k<toRightCheckCount-1; k++ ){
			let result = null;
			console.log(`compare: [${list[k]}, ${list[k+1]}]`);

			if(list[k] > list[k+1]){
				let temp = list[k];
				list[k] = list[k+1];
				list[k+1] = temp;
				result = "swopped";
				skippedAll = false;
			}
			else{		
				result = "skipped";
			}
			console.log(`result: ${result}`);
			console.log(`[${list}]\n`);
		}
		sortedAtTail++;
		toRightCheckCount--;
		console.log(`list : ${list}`)
		if(skippedAll === true){
			console.log('final answer: ', list);
			return list;
		}

		//sort down - find smallest
		skippedAll = true;
		console.log(`loop DOWN ${i}, include: [${list.slice(sortedAtHead, list.length-sortedAtTail)}], sortedAtHead:${sortedAtHead}, sortedAtTail:${sortedAtTail}`);
		for(let j = list.length-1-sortedAtTail; j>sortedAtHead; j-- ){
			let result = null;
			console.log(`compare: [${list[j]}, ${list[j-1]}]`)

			if(list[j] < list[j-1]){
				let temp = list[j-1];
				list[j-1] = list[j];
				list[j] = temp;
				result = "swopped";
				skippedAll = false;
			}
			else{				
				result = "skipped";
			}
			console.log(`result: ${result}`);
			console.log(`[${list}]\n`);
		}

		sortedAtHead++;
		toLeftCheckCount--;
		console.log(`list : ${list}`)
		if(skippedAll === true){
			console.log('final answer: ', list);
			return list;
		}
	}
}
cocktailSort([2,3,4,5,1]);
//cocktailSort([5,3,1,5,7,8,4]);
//cocktailSort([2,3,4,5,1,22,3,14,4,7,5]);