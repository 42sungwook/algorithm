const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
const shirtArray = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

let firstAns = 0;
let total = 0;
for (shirt of shirtArray) {
    firstAns += Math.ceil(shirt / T);
    total += shirt;
}
console.log(firstAns);
const secondAns = `${Math.floor(total / P)} ${total % P}`;
console.log(secondAns);