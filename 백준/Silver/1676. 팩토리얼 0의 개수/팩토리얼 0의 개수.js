const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const n = Number(input)
let count = 0;

for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
}

console.log(count)