const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[1].split(' ').map(Number)
const M = input[3].split(' ').map(Number)

const numSet = new Set(N)

for (const num of M) {
  console.log(numSet.has(num) ? 1 : 0)
}
