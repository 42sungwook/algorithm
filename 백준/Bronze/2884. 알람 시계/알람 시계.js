const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [H, M] = input.map(Number);

let min = M;
let hour = H;
if (M < 45) {
    min += 15;
    hour--;
    if (hour < 0) {
        hour += 24;
    }
} else {
    min -= 45;
}

const ans = hour + ' ' + min;
console.log(ans);