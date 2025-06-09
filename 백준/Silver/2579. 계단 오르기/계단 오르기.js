const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const stairs = input.slice(1).map(Number)

if (N === 1) {
  console.log(stairs[0])
  return
}

if (N === 2) {
  console.log(stairs[0] + stairs[1])
  return
}

const dp = Array(N).fill(0)

dp[0] = stairs[0]
dp[1] = stairs[0] + stairs[1]
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2])

for (let i = 3; i < N; i++) {
  // (i-2)번째에서 2칸 점프
  // (i-3)번째 → (i-1)번째 → i번째 (연속 3칸 방지)
  dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i])
}

console.log(dp[N - 1])
