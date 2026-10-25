let num1 = 5;
let num2 = 10;
let num3 = 17;
let num4 = 24;

function checkOddEven(number) {
  if (number % 2 === 0) {
    console.log(`The number ${number} is even.`);
  } else {
    console.log(`The number ${number} is odd.`);
  }
}

// Checking each variable
checkOddEven(num1);
checkOddEven(num2);
checkOddEven(num3);
checkOddEven(num4);