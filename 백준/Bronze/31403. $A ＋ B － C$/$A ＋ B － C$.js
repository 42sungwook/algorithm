const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B, C] = input;

const ans1 = Number(A) + Number(B) - Number(C);
const ans2 = A + B - C

console.log(ans1);
console.log(ans2);