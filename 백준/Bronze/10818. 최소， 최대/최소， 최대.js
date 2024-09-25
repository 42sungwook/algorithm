const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, nums] = input;

const arr = nums.split(' ');

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(min);
console.log(max);