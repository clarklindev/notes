// https://www.hackerrank.com/challenges/grading/problem

// grades array of integers
const roundGrade = grade => {
	console.log(grade);
	let mod5 = grade % 5;
	let tonext5 = 5 - mod5;
	console.log(tonext5);
	if (tonext5 < 3) {
		return grade + tonext5;
	}
	return grade;
};

const gradingStudents = grades => {
	let roundedGrades = grades.map(grade => {
		if (grade >= 38) {
			return roundGrade(grade);
		} else {
			return grade;
		}
	});
	return roundedGrades;
};

console.log(gradingStudents([73, 67, 38, 33]));
