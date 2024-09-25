const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [A, B] = input.split(' ').map(Number);

console.log(A * B);