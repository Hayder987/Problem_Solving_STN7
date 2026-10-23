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
var timeConversion = function (s) {
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
var repeatStr = function (n, s) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += s;
  }
  return result;
};

// Problem 5: Reversed Strings
var solution = function (str) {
  const result = str.split("").reverse().join("");
  return result;
};

// Problem 6: Sum of Positive
var positiveSum = function (arr) {
  let sum = 0;
  for (let num of arr) {
    if (num >= 0) {
      sum += num;
    }
  }
  return sum;
};

// Problem 7: Grasshopper --- Summation
var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Problem 8: Convert a Boolean to a String
var booleanToString = function (b) {
  return b ? "true" : "false";
};

// Problem 9: Fizz Buzz
var fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

// Problem 10: Running Sum of 1D Array
var runningSum = function (nums) {
  let result = [];
  let sum = 0;

  for (let num of nums) {
    result.push((sum += num));
  }
  return result;
};

// Problem 11: Richest Customer Wealth
var maximumWealth = function (accounts) {
  let result = 0;

  for (let account of accounts) {
    let sum = 0;

    for (item of account) {
      sum += item;
    }
    if (sum >= result) {
      result = sum;
    }
  }
  return result;
};

// Problem 12: Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let x = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[x - 1]) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
};

// Problem 13: Contains Duplicate
var containsDuplicate = function (nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

// Problem 14: Move Zeroes
var moveZeroes = function (nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }

  while (position < nums.length) {
    nums[position] = 0;
    position++;
  }
  return nums;
};

// Problem 15: Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
  return nums1;
};

// Problem 16: 3Sum
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Problem 17: Plus One
var plusOne = function (digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

// Problem 18: Reverse String
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
    return s
};

// Problem 19: Length of Last Word
var lengthOfLastWord = function(s) {
    let words = s.trim().split(/\s+/);

    return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));


