// given an array of integers and a target sum,
// find a total number of contiguous sum that is equal to the target sum.

const test1 = [1, 2, 1, 3, 1, 1, 1, 2];
const targetSum = 3;

const contiguousSum = (array, targetSum) => {
  let leftPointer = 0;
  let rightPointer = 1;
  let currentSum = array[leftPointer];
  let counter = 0;
  while (rightPointer <= array.length && leftPointer <= rightPointer) {
    if (currentSum < targetSum) {
      currentSum += array[rightPointer];
      rightPointer++;
    } else if (currentSum === targetSum) {
      counter++;
      currentSum -= array[leftPointer];
      leftPointer++;
    } else {
      currentSum -= array[leftPointer];
      leftPointer++;
    }
  }
  return counter;
};

console.log(contiguousSum(test1, targetSum));
