let text1 = "The number ";
let text2;
let number = 0;
let answerText = text1.concat(number, text2);


//Function that returns 'true' if a number is even, and 'false' if it's odd
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

//Uses the true/false value from isEven and outputs the answer
function updateText(value) {
    if (isEven(value) === false) {
        text2 = " is odd."
    } else {
        text2 = " is even."
    }
    answerText = text1.concat(value, text2);
    console.log(answerText);
}

//Tests:
updateText(10);
updateText(47);
updateText(-12);
updateText(8);
updateText(17);