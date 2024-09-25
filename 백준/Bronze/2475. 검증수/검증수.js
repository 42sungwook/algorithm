const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let ans = 0;
for (const num of input) {
    ans += num * num;
}

ans = ans % 10;
console.log(ans);