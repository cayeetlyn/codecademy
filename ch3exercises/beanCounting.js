//Counts the amount of a certain character in a string and logs the result (function is case sensitive)
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count += 1;
    }
  };
  return `There are ${count} '${char}'s in "${string}"`;
};

//Counts the amount of 'B's in a string by using countChars function with B as the default char
function countBs(string) {
  return countChar(string, "B");
};

//Tests:
console.log(countBs("BBC"));
console.log(countBs("Babies are born Bald"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("hello world", "l"));
console.log(countChar("93284476", "5"));