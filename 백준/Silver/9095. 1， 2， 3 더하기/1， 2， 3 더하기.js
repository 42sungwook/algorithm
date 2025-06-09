const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const cases = input.slice(1).map(Number)

dp = Array(11).fill(0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let i = 4; i <= 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
}

for (let j = 0; j < N; j++) {
  console.log(dp[cases[j]])
}
