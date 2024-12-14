//Part 1
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

//Part 2
//How many gallons of fuel is needed for the trip
//What is the cost of the fuel for the trip
//How long will the trip take

//Trip A
let totalDistance = 1500;
let milesPerGallonA = 30;
let speedA = 55;
let gallonsNeededA = totalDistance / milesPerGallonA;
let fuelCostA = gallonsNeededA * 3.00;
let tripDurationA = totalDistance / speedA;
//Trip B
let milesPerGallonB = 28;
let speedB = 60;
let gallonsNeededB = totalDistance / milesPerGallonB;
let fuelCostB = gallonsNeededB * 3.00;
let tripDurationB = totalDistance / speedB;
//Trip C
let milesPerGallonC = 23;
let speedC = 75;
let gallonsNeededC = totalDistance / milesPerGallonC;
let fuelCostC = gallonsNeededC * 3.00;
let tripDurationC = totalDistance / speedC; 

//log trip A
console.log(`Gallons needed for the trip: ${gallonsNeededB}`);//=50 gallons
console.log(`Cost of the fuel for the trip: ${fuelCostB}`);//=$150 fuel cost
console.log(`Trip duration: ${tripDurationB}`);//=27.27 hour trip
//log trip B
console.log(`Gallons needed for the trip: ${gallonsNeededA}`);//=53.57 gallons
console.log(`Cost of the fuel for the trip: ${fuelCostA}`);//=$160.71 fuel cost
console.log(`Trip duration: ${tripDurationA}`);//=25 hour trip
//log trip C
console.log(`Gallons needed for the trip: ${gallonsNeededC}`);//=65.21 gallons
console.log(`Cost of the fuel for the trip: ${fuelCostC}`);//=$195.63 fuel cost
console.log(`Trip duration: ${tripDurationC}`);//=20 hour trip  
//result
console.log(`Trip A is the most efficient trip.`);
