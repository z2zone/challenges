const sudokuBoard = [
  [1, 4, 3, 6, 2, 8, 5, 7, 9],
  [5, 7, 2, 1, 3, 9, 4, 6, 8],
  [9, 8, 6, 7, 5, 4, 2, 3, 1],
  [3, 9, 1, 5, 4, 2, 7, 8, 6],
  [4, 6, 8, 9, 1, 7, 3, 5, 2],
  [7, 2, 5, 8, 6, 3, 9, 1, 4],
  [2, 3, 7, 4, 8, 1, 6, 9, 5],
  [6, 1, 9, 2, 7, 5, 8, 4, 3],
  [8, 5, 4, 3, 9, 6, 1, 2, 7],
];

const checkSudoku = (board) => {
  for (let i = 0; i < 10; i++) {
    const checkHorizontal = new Array(10).fill(0);
    const checkVertical = new Array(10).fill(0);
    let tempSum1 = 0;
    let tempSum2 = 0;
    for (let j = 0; j < 10; j++) {
      checkHorizontal[board[i][j]] = 1;
      checkVertical[board[j][i]] = 1;
    }
    for (let i = 0; i < checkHorizontal.length; i++) {
      tempSum1 += checkHorizontal[i];
    }
    for (let i = 0; i < checkVertical.length; i++) {
      tempSum2 += checkVertical[i];
    }
    if (tempSum1 !== 9 || tempSum2 !== 9) {
      console.log(tempSum1, tempSum2);
      return false;
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const checkGroup = new Array(10).fill(0);
      let tempSum3 = 0;
      for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
          checkGroup[board[3 * i + k][3 * j + l]]++;
        }
      }
      for (let i = 0; i < checkGroup.length; i++) {
        tempSum3 += checkGroup[i];
      }
      if (tempSum3 !== 9) {
        console.log(tempSum3);
        return false;
      }
    }
  }
  return true;
};

console.log(checkSudoku(sudokuBoard));
