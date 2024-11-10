const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, K] = input[0].split(' ').map(Number)

const coin = input.slice(1).map(Number)
let remaining = K
let count = 0

for (let i = N - 1; i >= 0; i--) {
  const coinCount = Math.floor(remaining / coin[i])

  if (coinCount > 0) {
    count += coinCount
    remaining -= coin[i] * coinCount
  }

  if (remaining === 0) break
}

console.log(count)
