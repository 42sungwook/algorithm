const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for (let i = 1; i <= N; i++){
    const empty = new Array(N - i).fill(' ').join('');
    const star = new Array(i).fill('*').join('');
    const row = empty + star;
    console.log(row);
}