// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).

// Global variables can be made local (private) with closures. -> not very possible in other languages
// A function can access all variables defined inside the function.
// But a function can also access variables defined outside the function.

const myName = "brandon";

function printName() {
  console.log(myName);
}

printName(); // correctly log brandon.

// this function is using closure.
// most of the time when you run a program in other languages
// you cannot access a variable outside the function scope.
// it is possible in JS with the help of closure.

// Simply put, inner scope has access to its outer scope.

function outerFunction(url) {
  fetch(url).then(() => {
    console.log(url);
  });
}

// with this example as well, inner then() arrow function has access to the outer scope variable url.
