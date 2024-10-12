const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input[1].split(' ').map(Number);

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const sq = Math.sqrt(num);
    for (let i = 3; i <= sq; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let count = 0;
for (let num of numbers) {
    if (isPrime(num)) {
        count++;
    }
}

console.log(count);