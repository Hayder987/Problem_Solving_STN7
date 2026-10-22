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


// Problem 3: Time Conversion
var timeConversion = function(s) {
    let period = s.slice(-2);
    let time = s.slice(0, 8);
    let hour = Number(s.slice(0, 2));

    if (period === "AM" && hour === 12) {
        hour = 0;
    } else if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    return String(hour).padStart(2, "0") + time.slice(2);
};


// Problem 4: String Repeat
var repeatStr = function(n, s) {
  let result="";

  for(let i=1; i<=n; i++){
    result += s
  }
  return result;
};

// Problem 5: Reversed Strings
var solution = function(str) {
  const result = str.split("").reverse().join("")
  return result
};

// Problem 6: Sum of Positive
var positiveSum = function(arr) {
  let sum = 0;
  for(let num of arr){
    if(num >= 0){
      sum += num
    }
  }
  return sum;
};

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));