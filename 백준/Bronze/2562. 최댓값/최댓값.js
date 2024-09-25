const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const maxNumber = Math.max(...input);
const index = input.indexOf(maxNumber) + 1;

console.log(maxNumber);
console.log(index);