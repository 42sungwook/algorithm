const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const n = Number(input)

// 2 * n 직사각형 채우는 방법의 수

// 4칸 경우의 수 = 5가지
// ||||
// |=|
// ==
// =||
// ||=

// 5칸
// |||||
// |=||
// ||=|
// |||=
// =|||
// ==|
// |==
// =|=

// i = 1 => 1
// i = 2 => 2
// i = 3 => 3
// i = 4 => 5
// i = 5 => 8

const dp = []

dp[1] = 1
dp[2] = 2

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007
}

console.log(dp[n])
