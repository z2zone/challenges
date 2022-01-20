// Ternary Operator
const checkEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const ternaryCheckEven = (number) => {
  return number % 2 === 0 ? true : false;
};

// Nullish Coalescing Operator
const printMessage = (message) => {
  let text = message;
  if (message == null || message == undefined) {
    text = "nothing to display";
  }
  return text;
};

const printMessage2 = (message) => {
  let text = message ?? "nothing to display";
  // Correct Nullish Coalescing
  // leftExpr ?? rightExpr
  // if leftExpr is either null or undefined, rightExpr is executed.
  return text;
};

const printMessage3 = (message = "nothing to display") => {
  // default parameter only works for 'undefined' value, not 'null' value !!
  return message;
};

const printMessage4 = (message) => {
  let text = message || "nothing to display";
  // Similar to nullish but, rightExpr is executed whenever leftExpr is falsy value.
  // Falsy value includes false, undefined, null, 0, -0, NaN, ""
  // There is a potential chance of error.
  return text;
};

// Optional Chaining
const displayTitle = (personObject) => {
  if (personObject.job && personObject.job.title) {
    return personObject.job.title;
  } else {
    return "nothing to display";
  }
};

const displayTitle2 = (personObject) => {
  if (personObject.job?.title) {
    return personObject.job.title;
  } else {
    return "nothing to display";
  }
};

const displayTitle3 = (personObject) => {
  // Nullish + Optional Chaining
  return personObject.job?.title ?? "nothing to display";
};

// Looping
const test1 = [1, 2, 3, 4, 5, 6];

// get all even numbers
const getAllEven = (test1) => {
  // instead of for loop and indexing, use filter
  // filter() method creates a new array with all elements that pass the test
  return array.filter((num) => num % 2 === 0);
};

// multiply all elements by 4
const multiplyElements = (test1) => {
  return array.map((num) => num * 4);
};

const sumAllElements = (test1) => {
  return array.reduce((a, b) => a + b, 0);
};
