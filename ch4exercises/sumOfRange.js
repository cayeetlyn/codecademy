/*  Builds the input into an array based on the starting and ending value
    Step is used to determine if the function should count up or down, or if any values should be skipped */
function createRange(start, end, step = start < end ? 1 : -1) {
  let array = [];

  //Counts up (start is lower than end)
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  //Counts down (start is higher than end)
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

//Adds each item in the array from createRange
function getSum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  let answerString = `The sum of all values in your range (${array[0]} - ${array[array.length - 1]}) is ${total}.`;
  return answerString;
}

//Tests:
console.log(getSum(createRange(1, 20)))
console.log(getSum(createRange(5, 2, -1)));
console.log(getSum(createRange(1, 10)));
console.log(getSum(createRange(1, 10, 2)));