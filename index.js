// STN-7 Problem Solving Assessment - Solutions in JavaScript

// Problem 1: Staircase
var staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

// Problem 2: Grading Students

var gradingStudents = function (grades) {
  let result = [];

  for (let grade of grades) {
    let round = Math.ceil(grade / 5) * 5;

    if (grade < 38 || round - grade >= 3) {
      result.push(grade);
    } else {
      result.push(round);
    }
  }
  return result;
};

// console.log(gradingStudents([84, 29, 57]));
