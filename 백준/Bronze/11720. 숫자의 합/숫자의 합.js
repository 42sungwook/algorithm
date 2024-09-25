const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, number] = input;

const N = Number(len);

let ans = 0;
for(let i = 0; i < N; i++){
    const num = number[i];
    ans += Number(num);
}

console.log(ans);
