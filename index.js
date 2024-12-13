//Four numbers that add up to 50
let n1 = 10;
let n2 = 15;
let n3 = 20;
let n4 = 5;

//Check if all numbers are divisible by 5
let allDivisibleByFive = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all numbers divisible by 5? ${allDivisibleByFive}`);