const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0 ) return 0;
  return arr.reduce((sum, current) => sum + current);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function (a, b) {
  if (b === 0) return 1;
  if (b === 1) return a;

  let oriA = a;
  for (let i = 1; i < b; i++) {
    a *= oriA;
  }
  return a;
};

const factorial = function (num) {
  if ((num < 0)) {
    console.log("Invalid input. Please enter a positive number.");
    return;
  }

  if (num === 0) return 1;

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Personal quickTest
array = [1, 2, 3, 4, 5];
console.log(factorial(6));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
