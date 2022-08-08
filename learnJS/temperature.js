//Declares the temperature in kelvin
const kelvin = 293;

//Converts the temperature to celsius
let celsius = kelvin - 273;

//Converts the temperature to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Rounds fahrenheit to an integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);