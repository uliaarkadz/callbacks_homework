// Section 1: Programming Fundamentals
// Create a file called programming_fundamentals.js inside your homework folder for today.
// Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.
// Common programming principles
// As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

// Read this article on programming principles, focus on the following nine:

// DRY
// KISS
// Avoid creating a YAGNI
// Do the simplest thing that could possibly work
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns
// Answer

// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?

// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = (l) => {
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c];
    es += c % 2 === 0 ? c : 0;
  }
  return es;
};

console.log(f(55));

// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
