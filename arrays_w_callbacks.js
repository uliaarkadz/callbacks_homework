//***********************
// Callbacks
//***********************

// Make a function add that takes two arguments (numbers) and sums them together
function add(num1, num2) {
  return num1 + num2;
}
// Make a function subtract that takes two arguments (numbers) and subtracts them
function subtract(num1, num2) {
  return num1 - num2;
}
// Make a function multiply that takes two arguments and multiplies them
function multiply(num1, num2) {
  return num1 * num2;
}
// Make a function divide that takes two arguments and divides them
function divide(num1, num2) {
  return num1 / num2;
}
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1, num2, operates) => {
  return operates(num1, num2);
};
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(105, 5, add));
console.log(calculate(105, 5, subtract));
console.log(calculate(105, 5, divide));
console.log(calculate(105, 5, multiply));

//***********************
// Function definition placement
//***********************

// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
  console.log("bar here");
};

const foo = () => {
  console.log("foo here");
};

//move function declaration on top and function ivocation after

bar();
foo();

//***********************
// Error reading
//***********************

// What is meant by the error(s) this produces?

//Answer: SyntaxError: Identifier 'foo' has already been declared: it means that function with name foo already exists

// foo();

// const foo ()=>{
//     console.log('hi');
// }

//lets rename it to foo1, ERROR: SyntaxError: Missing initializer in const declaration: because the arrow function is invoked beore the function it gives an error
// foo1();

// const foo1 ()=>{
//     console.log('hi');
// }
//CORRECT:

const foo1 = () => {
  console.log("hi");
};
foo1();
//***********************
// Section 3 Array Methods with Callbacks
//***********************

// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.
// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

//***********************
//Every
//***********************
// Determine if every number is greater than or equal to 0

let greaterThanZero;

greaterThanZero = nums.every((num) => {
  return num >= 0;
});

console.log(greaterThanZero);

// determine if every word shorter than 8 characters

let shorterEightCharacter;

shorterEightCharacter = panagram.every((pan) => {
  return pan.length < 8;
});

console.log(shorterEightCharacter);

//***********************
// Filter
//***********************
// filter the array for numbers less than 4

const lessThanFour = nums.filter((num) => {
  return num < 4;
});

console.log(lessThanFour);

// filter words that have an even length

const evenLength = panagram.filter((pan) => {
  return pan.length % 2 === 0;
});

console.log(evenLength);

//***********************
// Find
//***********************

// Find the first value divisible by 5

const firstValue = nums.find((num) => {
  return num % 5 === 0;
});

console.log(firstValue);

// find the first word that is longer than 5 characters

const longerFive = panagram.find((pan) => {
  return pan.length > 5;
});

console.log(longerFive);

//***********************
// Find Index
//***********************

// find the index of the first number that is divisible by 3

const divisibleByThree = nums.findIndex((num) => {
  return num % 3 === 0;
});

console.log(divisibleByThree);

// find the index of the first word that is less than 2 characters long

const lessTwo = panagram.findIndex((pan) => {
  return pan.length < 2;
});

console.log(lessTwo);

//***********************
// For Each
//***********************

// console.log each value of the nums array multiplied by 3

nums.forEach((num) => {
  console.log(num * 3);
});

// console.log each word with an exclamation point at the end of it
panagram.forEach((p) => {
  console.log(p + "!");
});

//***********************
// Map
//***********************

// make a new array of each number multiplied by 100

const multiplyByHundred = nums.map((num) => {
  return num * 100;
});

console.log(multiplyByHundred);

// make a new array of all the words in all uppercase

const upperCaseArray = panagram.map((p) => {
  return p.toUpperCase();
});

console.log(upperCaseArray);

//***********************
// Some
//***********************

// Find out if some numbers are divisible by 7

let divisibleBySeven = nums.some((num) => {
  return num % 7 === 0;
});

console.log(divisibleBySeven);

// Find out if some words have the letter a in them

let haveLetter = panagram.some((p) => {
  return p.toLowerCase().includes("a");
});

console.log(haveLetter);

//***********************
// Hungry for More
//***********************

//***********************
// Reduce
//***********************

// Add all the numbers in the array together using the reduce method

const sum = nums.reduce((a, b) => {
  return a + b;
}, 0);

console.log(sum);

// concatenate all the words using reduce

const concatWords = panagram.reduce((a, b) => {
  return a + b;
}, "");

console.log(concatWords);

//***********************
// Sort
//***********************

// Try to sort without any arguments, do you get what you'd expect with the numbers array?

// nums.sort();

// console.log(nums);

// Try to sort without any arguments, do you get what you'd expect with the words array?

// panagram.sort();

// console.log(panagram);

// Sort the numbers in ascending order

nums.sort((a, b) => {
  return a - b;
});

console.log(nums);

// Sort the numbers in descending order

nums.sort((a, b) => {
  return b - a;
});

console.log(nums);

// Sort the words in ascending order

panagram.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(panagram);

// Sort the words in descending order

panagram.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(panagram);

// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
