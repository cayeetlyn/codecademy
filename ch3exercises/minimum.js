let intro = "The smaller number of the two you entered is ";

function min(num1, num2){
    if (num1 < num2){
        return num1;
    } else {
        return num2;
    };
};

//Tests:
console.log(intro + min(0, 10) + ".");
console.log(intro + min(5, 15) + ".");