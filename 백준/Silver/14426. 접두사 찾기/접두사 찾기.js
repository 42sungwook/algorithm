const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

const prefixSet = new Set()
let count = 0

for (let i = 1; i <= N; i++) {
  const str = input[i]
  for (let j = 0; j <= str.length; j++) {
    prefixSet.add(str.substring(0, j))
  }
}

for (let k = N + 1; k <= N + M; k++) {
  if (prefixSet.has(input[k])) {
    count++
  }
}

console.log(count)
