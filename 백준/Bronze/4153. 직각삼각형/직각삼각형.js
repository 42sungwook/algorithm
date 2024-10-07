const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input.length;

for (let i = 0; i < len - 1; i++) {
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);;
    if (a * a + b * b === c * c) {
        console.log('right');
    } else {
        console.log('wrong');
    }    
}
