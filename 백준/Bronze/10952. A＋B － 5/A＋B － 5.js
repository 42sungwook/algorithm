const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;
while(true) {
    const [A, B] = input[i].split(' ').map(Number);
    if (A === 0 && B === 0) {
        return;
    }
    console.log(A + B);
    i++;
}