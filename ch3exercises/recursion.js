//Function that results in "even" or "odd" after checking the input number and logs the result 
function isEven(n) {
    n = Math.abs(n);
    let answerText = `The number ${n} is ${n % 2 === 0 ? "even" : "odd"}.`;
    console.log(answerText);
};

//Tests:
isEven(10);
isEven(47);
isEven(-12);
isEven(8);
isEven(17);