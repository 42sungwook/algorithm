const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const set = new Set();
for (let i = 0; i < 10; i++) {
    const num = input[i] % 42;
    set.add(num);
}

console.log(set.size);