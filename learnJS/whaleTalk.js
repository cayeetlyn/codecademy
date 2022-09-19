
const vowels = ['a', 'e', 'i', 'o', 'u'];

const whaleTranslate = (input) => {

    let resultArray = [];
    let resultString;
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++){
        if (input[i] === 'e'){
            resultArray.push(input[i]);
        }
        if (input[i] === 'u'){
            resultArray.push(input[i]);
        }
        for (let j = 0; j < vowels.length; j++){
            if (vowels[j] === input[i]) {
                resultArray.push(vowels[j]);
            }
        }
    }
    resultString = resultArray.join('').toUpperCase();
    console.log(resultString);
}

whaleTranslate("turpentine and turtles");
whaleTranslate("this is an input phrase");
whaleTranslate("TURPENTINE AND TURTLES");