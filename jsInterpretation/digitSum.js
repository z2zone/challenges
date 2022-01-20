const numbers = [125, 15232, 97];

const digitSum = (array) => {
  let maxSum = -Infinity;
  let answer = 0;
  for (const number of array) {
    let theSum = 0;
    let temp = number;
    while (temp > 0) {
      let lastDigit = temp % 10;
      temp = Math.floor(temp / 10);
      theSum += lastDigit;
    }
    if (theSum > maxSum) {
      maxSum = theSum;
      answer = number;
    }
  }
  return { maxSum, answer };
};

console.log(digitSum(numbers));
