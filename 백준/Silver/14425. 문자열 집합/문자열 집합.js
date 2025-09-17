const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

const setN = new Set()
let count = 0

for (let i = 1; i <= N; i++) {
  setN.add(input[i])
}

for (let j = N + 1; j <= N + M; j++) {
  if (setN.has(input[j])) {
    count++
  }
}

console.log(count)
