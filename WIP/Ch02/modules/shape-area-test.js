const ShapeAreaCalculator = require('./shape-area.js');
const calc = new ShapeAreaCalculator();

const radius = 5;
console.log(`Area of circle with radius ${radius} is ${calc.areaOfCircle(radius)}`);

const side = 5;
console.log(`Area of square with side ${side} is ${calc.areaOfSquare(side)}`);

const base = 5;
const height = 4;
console.log(`Area of triangle with base ${base} and height ${height} is ${calc.areaOfTriangle(base, height)}`);