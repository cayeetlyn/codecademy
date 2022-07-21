//Counts the amount of a certain character in a string
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count += 1;
    }
  };
  return "There are " + count + " '" + char + "'s in \"" + string + "\"";
};

//Counts the amount of 'B's in a string
function countBs(string) {
  return countChar(string, "B");
};

//Tests:
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("hello world", "l"));
console.log(countChar("93284476", "4"));