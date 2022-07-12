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

//Tests:
updateText(10);
updateText(47);
updateText(-12);