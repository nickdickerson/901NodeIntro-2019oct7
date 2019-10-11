const add = require('./add.js');
console.log('5+7=', add(5,7));

const Calculator = require('./calculator.js');
const myCalc = new Calculator();
console.log(`1+2=`, myCalc.add(1,2));
console.log(`32-8=`, myCalc.subtract(32,8));
console.log(`8*3=`, myCalc.multiply(8,3));