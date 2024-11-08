const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

const setN = new Set()

for (let i = 1; i <= N; i++) {
  setN.add(input[i])
}

const result = []

for (let i = N + 1; i <= N + M; i++) {
  if (setN.has(input[i])) {
    result.push(input[i])
  }
}

result.sort()

console.log(result.length)
console.log(result.join('\n'))