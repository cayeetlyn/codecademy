//2.1 Looping a triangle


function triangle(symbol, length) {
  for (let i = symbol; i.length < length; i += symbol) {
    console.log(i);
  };
};

triangle("~", 6);