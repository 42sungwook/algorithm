const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, ...cases] = input;
const T = Number(len);

for (let i = 0; i < T; i++) {
    const [count, str] = cases[i].split(' ');
    let row = '';
    for (const c of str) {
        row += Array(Number(count)).fill(c).join('');
    }
    console.log(row);
}