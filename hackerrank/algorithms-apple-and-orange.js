//https://www.hackerrank.com/challenges/apple-and-orange/problem

// Complete the countApplesAndOranges function below.
//s starting point of house
//t ending point of house
//a tree apple
//b orange tree
//apples array
//orranges array
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	const appleAnswers = apples.map(apple => {
		return apple + a;
	});
	const orangeAnswers = oranges.map(orange => {
		return orange + b;
	});

	//  console.log(appleAnswers);
	//console.log(orangeAnswers);

	const filteredApple = appleAnswers.filter(each => {
		//    console.log(each);
		let answer = each >= s && each <= t;
		//    console.log(answer)
		return answer;
	});

	const filteredOrange = orangeAnswers.filter(each => {
		///  console.log(each)
		return each >= s && each <= t;
	});

	console.log(filteredApple.length);
	console.log(filteredOrange.length);
}

// The first line contains two space-separated integers denoting the respective values of s and t.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
// The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
