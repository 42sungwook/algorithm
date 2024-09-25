const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B, C] = input.map(Number);

const num = String(A * B * C);
const arr = [...num];
const len = arr.length;
const ans = new Array(10).fill(0);
for (let i = 0; i < len; i++){
    ans[arr[i]]++;
}
for (let i = 0; i < 10; i++) {
    console.log(ans[i]);
}