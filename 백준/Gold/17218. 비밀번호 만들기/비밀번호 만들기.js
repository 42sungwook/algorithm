const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [str1, str2] = input

const dp = Array(str1.length + 1)
  .fill()
  .map(() => Array(str2.length + 1).fill(0))

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    const char1 = str1[i - 1]
    const char2 = str2[j - 1]

    if (char1 === char2) {
      dp[i][j] = dp[i - 1][j - 1] + 1
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
}

let result = ''
let i = str1.length
let j = str2.length

while (i > 0 && j > 0) {
  if (str1[i - 1] === str2[j - 1]) {
    result = str1[i - 1] + result
    i--
    j--
  } else if (dp[i - 1][j] > dp[i][j - 1]) {
    i--
  } else {
    j--
  }
}

console.log(result)
