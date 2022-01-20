// Given two dice of #n sides and #m sides, find the sum that comes out the most.

const rollTwoDice = (n, m) => {
  const checkSum = new Array(n + m + 1).fill(0);
  let maxSum = -Infinity;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      checkSum[i + j]++;
    }
  }
  for (let i = 0; i < checkSum.length; i++) {
    if (checkSum[i] > maxSum) {
      maxSum = checkSum[i];
    }
  }
  for (let i = 0; i < checkSum.length; i++) {
    if (checkSum[i] === maxSum) {
      console.log(i);
    }
  }
};

rollTwoDice(4, 6);
