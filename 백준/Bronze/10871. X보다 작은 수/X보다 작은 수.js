const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [first, second] = input;

const [N, X] = first.split(' ').map(Number);
const arr = second.split(' ');
let ans = '';

for(let i = 0; i < N; i++){
    if (arr[i] < X){
        ans += String(arr[i]);

        if (i + 1 !== N) {
            ans += ' ';
        }
    }
}
console.log(ans);