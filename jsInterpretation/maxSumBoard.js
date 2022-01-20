const board = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const maxSumBoard = (board) => {
  let maxSum = -Infinity;

  for (let i = 0; i < board.length; i++) {
    let horizontalSum = 0;
    let verticalSum = 0;
    for (let j = 0; j < board.length; j++) {
      horizontalSum += board[i][j];
      verticalSum += board[j][i];
    }
    if (horizontalSum > maxSum) {
      maxSum = horizontalSum;
    }
    if (verticalSum > maxSum) {
      maxSum = verticalSum;
    }
  }

  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < board.length; i++) {
    leftDiagonalSum += board[i][i];
    rightDiagonalSum += board[i][board.length - 1 - i];
  }
  if (leftDiagonalSum > maxSum) {
    maxSum = leftDiagonalSum;
  }
  if (rightDiagonalSum > maxSum) {
    maxSum = rightDiagonalSum;
  }
  return maxSum;
};

console.log(maxSumBoard(board));
