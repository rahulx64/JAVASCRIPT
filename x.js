// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = numbers;
console.log(...rest);