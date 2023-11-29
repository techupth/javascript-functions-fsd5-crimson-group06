// Start coding here
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
let addResult = add;
console.log(addResult(10, 20));
let divideResult = divide;
console.log(divideResult(3000, 10));
