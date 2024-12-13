//Four numbers that add up to 50
let n1 = 10;
let n2 = 15;
let n3 = 20;
let n4 = 5;

//Check if all numbers are divisible by 5
let allDivisibleByFive = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all numbers divisible by 5? ${allDivisibleByFive}`);

// Check if first number is larger than the last
let firstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${firstLargerThanLast}`);

// Arithmetic chain
let result = ((n2 - n1) * n3) % n4;
console.log(`Result of arithmetic chain: ${result}`); 

// Check if a number is greater than 25 without using '!'
let isGreaterThan25 = n1 > 25;
console.log(`Is the first number greater than 25? ${isGreaterThan25}`);