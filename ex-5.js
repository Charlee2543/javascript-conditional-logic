function calculateStudentGrade(score) {
	if (score <= 100 && score >= 90) {
		return "Grade A";
	} else if (score < 90 && score >= 80) {
		return "Grade B";
	} else if (score < 80 && score >= 70) {
		return "Grade C";
	} else if (score < 70 && score >= 60) {
		return "Grade D";
	} else if (score < 60 && score >= 0) {
		return "Grade F";
	} else {
		return "Grade F";
	}
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
