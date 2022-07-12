let text1 = "The number ";
let text2 = " is even: "
let number = 0;
let answerText = text1.concat(number, text2);


function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    };
};

function updateText(value) {
    if (isEven(value) === false){
        text2 = " is odd."
    } else {
        text2 = " is even."
    }
    answerText = text1.concat(value, text2);
    console.log(answerText);
}

updateText(10);
updateText(47);
updateText(-12);

/*Tests:
number = 10;
   answerText = text1.concat(number, text2);
  isEven(number);
  console.log(answerText);
answerText = text1.concat(number, text2);
console.log(answerText + isEven(number));

number = 47;
    answerText = text1.concat(number, text2);
    isEven(number);
    console.log(answerText);
answerText = text1.concat(number, text2);
 /  console.log(answerText + isEven(number));

number = -12;
    answerText = text1.concat(number, text2);
    isEven(number);
    console.log(answerText);
answerText = text1.concat(number, text2);
    console.log(answerText + isEven(number)); */