const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let N = Number(input)
const solution = new Array(N + 1).fill(0)

function dp(num) {
  for (let i = 2; i <= num; i++) {
    solution[i] = solution[i - 1] + 1
    if (i % 2 === 0) {
      solution[i] = Math.min(solution[i], solution[i / 2] + 1)
    }
    if (i % 3 === 0) {
      solution[i] = Math.min(solution[i], solution[i / 3] + 1)
    }
  }
  return solution[num]
}

console.log(dp(N))
