const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const [A, B, V] = input.split(' ').map(Number)

const days = Math.ceil((V - A) / (A - B)) + 1

console.log(days)
