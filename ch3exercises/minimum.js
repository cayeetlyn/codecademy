

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    };
};

//Gets the minimum of two numbers

function getMin(value1, value2) {
    console.log("The smaller number of the two you entered is " + min(value1, value2) + ".");
};

//Outputs the minimum of the two numbers, runs the min function

//Tests:
getMin(0, 10);
getMin(5, 15);
getMin(100, 200);