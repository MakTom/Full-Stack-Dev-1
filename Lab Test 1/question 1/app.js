//importing module 'calculator'
const calc = require('./calculator.js');

//parameter declaration
const num = 2,
      num1 = 6,
      num2 = 6;
      
// calling functions in module
console.log(`Even Doubler ${num} equals: ${calc.evenDouble(num)}`);
console.log(`multiply ${num1} * ${num2} equals: ${calc.multiplyTwoNumbers(num1,num2)}`);
