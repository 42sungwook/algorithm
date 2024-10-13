const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const [a, b] = input;

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const gcdResult = gcd(a, b);
const lcmResult = lcm(a, b);

console.log(gcdResult);
console.log(lcmResult);