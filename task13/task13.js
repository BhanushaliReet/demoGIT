let nSum = 10;        
let nTable = 7;       
let numCheck1 = 153;  
let numCheck2 = 29;   
let numCheck3 = 139;  

let totalSum = 0;
for (let i = 1; i <= nSum; i++) {
  totalSum += i;
}
console.log(`Sum of first ${nSum} numbers: ${totalSum}`);

console.log(`\nMultiplication Table of ${nTable}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${nTable} x ${i} = ${nTable * i}`);
}

function analyzeNumber(num) {
  console.log(`\nEx - Number :- ${num}`);

  let tempForDigits = num;
  let sumOfDigits = 0;
  while (tempForDigits > 0) {
    let digit = tempForDigits % 10;
    sumOfDigits += digit;
    tempForDigits = Math.floor(tempForDigits / 10);
  }
  console.log(`Sum of its digits: ${sumOfDigits}`);

  let tempForArmstrong = num;
  let armstrongSum = 0;
  while (tempForArmstrong > 0) {
    let digit = tempForArmstrong % 10;
    armstrongSum += Math.pow(digit, 3);
    tempForArmstrong = Math.floor(tempForArmstrong / 10);
  }
  let isArmstrong = (armstrongSum === num) ? "Yes" : "No";
  console.log(`Is it an Armstrong number? ${isArmstrong}`);

  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  console.log(`Is it a prime number? ${isPrime ? "Yes" : "No"}`);

  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(`Factors: ${factors.join(", ")}`);
}

analyzeNumber(numCheck1);
analyzeNumber(numCheck2);
analyzeNumber(numCheck3);