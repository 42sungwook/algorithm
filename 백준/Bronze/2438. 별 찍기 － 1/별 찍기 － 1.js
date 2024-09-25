const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for(let i = 0; i < N; i++) {
    const row = Array(i + 1).fill('*').join('');
    console.log(row);
}