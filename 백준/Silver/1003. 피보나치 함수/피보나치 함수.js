const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const cases = input.slice(1).map(Number)
const ans = []
const dp = Array(41)
  .fill(null)
  .map(() => [0, 0])
dp[0] = [1, 0]
dp[1] = [0, 1]

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0]
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1]
}

for (let i = 0; i < cases.length; i++) {
  ans.push(dp[cases[i]].join(' '))
}

console.log(ans.join('\n'))
