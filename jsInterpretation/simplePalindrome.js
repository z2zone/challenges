let test1 = "goog";
let test2 = "gooG";
let test3 = "googoog";

const isPalindrome = (string) => {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));
