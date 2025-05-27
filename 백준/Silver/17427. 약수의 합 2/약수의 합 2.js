const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const N = Number(input)

let sum = 0

for (let i = 1; i < N + 1; i++) {
  const len = Math.floor(N / i)
  sum += len * i
}

console.log(sum)
