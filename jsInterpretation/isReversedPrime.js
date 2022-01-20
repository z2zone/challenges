const test = [32, 55, 62, 3700, 250];

const isReversedPrime = (array) => {
  let answer = [];
  for (const number of array) {
    let temp = number;
    let reversed = 0;
    while (temp > 0) {
      let lastDigit = temp % 10;
      reversed = 10 * reversed + lastDigit;
      temp = Math.floor(temp / 10);
    }
    counter = 0;
    for (let i = 1; i <= reversed; i++) {
      if (reversed % i === 0) {
        counter++;
      }
    }
    if (counter === 2) {
      answer.push(reversed);
    }
  }
  return answer;
};

console.log(isReversedPrime(test));
