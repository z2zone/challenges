const test1 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1];

const caculateScore = (array) => {
  let score = 0;
  let isConsecutive = 0;
  for (const value of array) {
    if (value === 1) {
      isConsecutive++;
      score += isConsecutive;
    } else if (value === 0) {
      isConsecutive = 0;
    }
  }
  return score;
};

console.log(caculateScore(test1));
