// Callbacks
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
