const test1 = [1, 3, 5];
const test2 = [2, 3, 6, 7, 9];

const mergeTwo = (arr1, arr2) => {
  const answer = [];
  let counter1 = 0;
  let counter2 = 0;
  while (counter1 < arr1.length && counter2 < arr2.length) {
    if (arr1[counter1] < arr2[counter2]) {
      answer.push(arr1[counter1]);
      counter1++;
    } else {
      answer.push(arr2[counter2]);
      counter2++;
    }
  }
  if (counter1 < arr1.length - 1) {
    return answer.concat(arr1.slice(counter1, arr1.length - 1));
  } else if (counter2 < arr2.length - 1) {
    return answer.concat(arr2.slice(counter2, arr2.length - 1));
  }
  return answer;
};

const mergeTwoLists = (array1, array2) => {
  let counter1 = 0;
  let counter2 = 0;
  const answer1 = [];
  while (counter1 < array1.length && counter2 < array2.length) {
    if (array1[counter1] > array2[counter2]) {
      answer1.push(array2[counter2]);
      counter2++;
    } else {
      answer1.push(array1[counter1]);
      counter1++;
    }
  }
  if (counter1 < array1.length - 1) {
    return answer1.concat(array1.slice(counter1, array1.length - 1));
  } else if (counter2 < array2.length - 1) {
    return answer1.concat(array2.slice(counter2, array2.length - 1));
  }
};

console.log(mergeTwo(test1, test2));
