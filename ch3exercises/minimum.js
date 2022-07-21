
//Gets the minimum of two numbers
function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    };
};


//Outputs the minimum of the two numbers, runs the min function
function getMin(value1, value2) {
    let string1 = "The smaller number of the two you entered is ";
    let solution = string1.concat(min(value1, value2) + ".");
    console.log(solution);
};



//Tests:
getMin(0, 10);
getMin(5, 15);
getMin(100, 200);