const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const N = input[0]
const difficulty = input.slice(1, input.length)

difficulty.sort((a, b) => a - b)

const pplToEliminate = Math.round(N * 0.15)

if (N === 0) {
  console.log(0)
  return
}

const parsedArray = difficulty.slice(
  pplToEliminate,
  difficulty.length - pplToEliminate
)

const average = Math.round(
  parsedArray.reduce((a, b) => a + b) / parsedArray.length
)

console.log(average)
