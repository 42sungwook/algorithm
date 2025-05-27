const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [T, ...testLines] = input

const count = Number(T)

function getGCD(a, b) {
    while(b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

function getLCM(a, b) {
    const gcd = getGCD(a, b)
    const lcm = (a * b) / gcd
    return lcm
}

for (let i = 0; i < count; i++) {
    const [a, b] = testLines[i].split(' ').map(Number)
    const lcm = getLCM(a, b)
    console.log(lcm)
}