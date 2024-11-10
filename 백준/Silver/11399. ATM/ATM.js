const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const P = input[1].split(' ').map(Number)

P.sort((a, b) => a - b)

let sum = 0
let ans = 0

for (let i = 0; i < P.length; i++) {
  sum += P[i]
  ans += sum
}

console.log(ans)
