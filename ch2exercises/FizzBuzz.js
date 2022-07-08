//2.2 FizzBuzz

function multiples(startNum, endNum, word1, word2){
for (let i = startNum; i <= endNum; i++) {
    let output = "";
    if (i % 3 == 0) {
      output += word1;
    };
    if (i % 5 == 0) {
      output += word2;
    };
    console.log(output || i);
  };
};

multiples(1, 50, "guinea", "pig");