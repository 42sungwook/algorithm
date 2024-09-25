const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, ...cases] = input;
for (let i = 0; i < len; i++) {
    let total = 0;
    let score = 1;
    for (c of cases[i]) {
        if (c === 'O') {
            total += score;
            score++;
        } else {
            score = 1;
        }
    }
    console.log(total);
}
