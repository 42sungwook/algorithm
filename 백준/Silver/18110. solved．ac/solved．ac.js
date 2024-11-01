const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const N = input[0]
const difficulty = input.slice(1, input.length)

difficulty.sort((a, b) => a - b)

const pplToEliminate = Math.round(N * 0.15)

const parsedArray = difficulty.slice(
  pplToEliminate,
  difficulty.length - pplToEliminate
)

const average = Math.round(
  parsedArray.reduce((a, b) => a + b, 0) / parsedArray.length || 0
)

console.log(average)
