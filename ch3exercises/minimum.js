
//Gets the minimum of two numbers
function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    };
};

//Gets the smallest number of a set of several numbers
function manyMin(...rest) {
    let minimum;
    rest.forEach(function (element) {
        if (minimum == undefined){
            minimum = element;
        }
        minimum = min(element, minimum);
    });
    return minimum;
};

//Outputs the smallest number of a set to the console, runs the manyMin function
function getManyMin(...rest) {
    let solution = `The smallest number of the ones you entered is ${manyMin(...rest)}.`;
    console.log(solution);
};


//Outputs the minimum of the two numbers, runs the min function
function getMin(value1, value2) {
    let solution = `The smaller number of the two you entered is ${min(value1, value2)}.`;
    console.log(solution);
};



//Tests:
getMin(0, 10);
getMin(5, 15);
getMin(100, 200);
getManyMin(17, 20, 3, 5, 4, 7, 200);
getManyMin(0, -5, 6, 7);
getManyMin(45, 36, 8, 23, 6, 9);
