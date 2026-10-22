// STN-7 Problem Solving Assessment - Solutions in JavaScript

// Problem 1: Staircase
var staircase = function(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "#".repeat(i);

        if (i < n) {
            result += "\n";
        }
    }

    return result;
};

console.log(staircase(1));
