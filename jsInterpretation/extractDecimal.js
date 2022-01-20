const test1 = "gas0d0asda1sd2ad0";

const isDecimal = (string) => {
  let result = 0;
  for (let char of string) {
    if (!isNaN(char)) {
      result = result * 10 + parseInt(char);
    }
  }
  return result;
};

const findDivisor = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      counter++;
    }
  }
  return counter;
};
console.log(findDivisor(isDecimal(test1)));
