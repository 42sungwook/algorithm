const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...cases] = input;

const T = Number(count);

for(let i = 0; i < T; i++){
    const [A, B] = cases[i].split(' ').map(Number);
    console.log(A + B);
}