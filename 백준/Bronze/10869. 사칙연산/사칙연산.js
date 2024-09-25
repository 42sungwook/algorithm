const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B] = input;
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);