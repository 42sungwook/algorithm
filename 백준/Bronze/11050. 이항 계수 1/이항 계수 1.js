const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const [N, K] = input.split(' ').map(Number)

function combination(n, k) {
  if (k < 0 || k > n) return 0
  if (k === 0 || k === n) return 1
  k = Math.min(k, n - k)
  let result = 1
  for (let i = 1; i <= k; i++) {
    result *= (n - i + 1) / i
  }
  return result
}

console.log(combination(N, K))
