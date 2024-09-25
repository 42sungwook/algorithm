const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for(let i = 1; i <= N; i++) {
    console.log(i);
}