const board = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const diamondSum = (board) => {
  let start = Math.floor(board.length / 2);
  let end = start + 1;
  let totalSum = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = start; j < end; j++) {
      totalSum += board[i][j];
    }
    if (i >= Math.floor(board.length / 2)) {
      start += 1;
      end -= 1;
    } else {
      start -= 1;
      end += 1;
    }
  }
  return totalSum;
};

console.log(diamondSum(board));
