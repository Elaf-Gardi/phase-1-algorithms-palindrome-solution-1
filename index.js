function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", reverseString("elaf"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", reverseString("exo"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", reverseString("abba"));
}

module.exports = isPalindrome;
