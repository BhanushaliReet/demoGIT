// Predefined static variables
const P = 100000;    // Principal amount
const r = 0.15;      // Annual interest rate (15%)
const n = 1;         // Compounded annually (1 time per year)
const t = 3;         // Time period in years

// Formula: A = P * (1 + (r / n)) ^ (n * t)
const A = P * Math.pow(1 + (r / n), n * t);

// Compound Interest = Total Amount - Principal
const compoundInterest = Math.round(A - P);

// Output to the console as requested
console.log(`The compound interest after ${t} years is: ${compoundInterest}`);