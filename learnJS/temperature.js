function tempConverter(temp, unitStart, unitEnd){
    let resultTemp = 0;
    let resultUnit = '';
    unitStart = unitStart.toLowerCase();
    unitEnd = unitEnd.toLowerCase();

    let string = unitStart.concat(' ', unitEnd);

    switch (string){
        case 'k f':
            resultTemp = (temp - 273) * (9/5) + 32;
            resultUnit = 'Fahrenheit';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'f k':
            resultTemp = (temp - 32) * (5/9) + 273;
            resultUnit = 'Kelvin';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'k c':
            resultTemp = temp - 273;
            resultUnit = 'Celsius';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'c k':
            resultTemp = temp + 273;
            resultUnit = 'Kelvin';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'c f':
            resultTemp = temp * (9/5) + 32;
            resultUnit = 'Fahrenheit';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'f c':
            resultTemp = (temp - 32) * (5/9);
            resultUnit = 'Celsius';
            console.log(`The temperature is ${resultTemp} degrees ${resultUnit}.`);
            break;
        case 'k k':
        case 'c c':
        case 'f f':
            console.log("Starting and end units are the same.");
            break;
        default:
            console.log("Invalid input.");
            break;
    }
};

tempConverter(293, 'K', 'f');
tempConverter(68, 'f', 'k');
tempConverter(200, 'f', 'C');
tempConverter(50, 'C', 'f');
tempConverter(50, 'C', 'c');