// Section 1: Programming Fundamentals
// Create a file called programming_fundamentals.js inside your homework folder for today.
// Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.
// Common programming principles
// As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

// Read this article on programming principles, focus on the following nine:

// DRY
//--the main goal of programming is not to repeat the code and make more reusable as possible, what helps to be more efficent in code writing and maintaining after
// KISS
//--keep code simple is one of the main important concepts in development, as it takes less time to write and creates fewer bugs
// Avoid creating a YAGNI
//--add functionality only when you need it
// Do the simplest thing that could possibly work
//--always think about the most simliest solution
// Don't make me think
//--code should not be complex and take little effort to read nad understand
// Write code for the maintainer
//--always think that you or someone else will have to maintain the code in the future, so make it that as easy as possible for future editor to undestand it
// Single responsibility principle
//--each component, method or function should perfon one well-defined task
// Avoid premature optimization
//--do not start ptimizing the code untill you know that it is working
// Separation of concerns
//--make sure that different functionalities should be managed by distinkt and almost not overlapping modulse of code
// Answer

// Which ones surprise you (if any)?
//None, I think each of the principles is important and a good guidelines to how to keep your code in a good state
// Which one is currently giving you the most struggle?
//as a biginner It is hard to think and apply concepts how to make your code more reusable and also you always think that the solutions should be complex

// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:
//create function that has parameter l
const f = (l) => {
  //declair variables
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  //do while loop if c less or equals than l
  while (c <= l) {
    //while condition is true n is product of c + p
    n = c + p;
    //assign array
    [c, p] = [n, c];
    //if product of es + c is even return c otherwise return 0
    es += c % 2 === 0 ? c : 0;
  }
  //function returns value of es
  return es;
};

console.log(f(55));

// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:
//create function that takes parameter lomit
const f2 = (limit) => {
  //declare variable evensum, previous, current
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  //use while loop untill limit reached
  while (current <= limit) {
    //variable for the next number
    let next = current + previous;
    //after next is defined assign current to previous
    previous = current;
    //and current is equeals to next
    current = next;
    //condition if current is even add it to the evenSum variable
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  //return sum of even number with is the declared limit
  return evenSum;
};

console.log(f2(55));

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

//------we can name this function as sumOfEvenNumbers, in the second function I thik all variable and names make sense and it is easy to undestand what code does

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//it is definitly easier to work with f2 code as it has clear names

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//  The code give an exceptions as it treats two lines as one assignment:  SyntaxError: Invalid left-hand side in assignment
