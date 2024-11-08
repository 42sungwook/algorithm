const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

const pokedex = input.slice(1, N + 1)
const map = {}
const ans = []

for (let i = 0; i < pokedex.length; i++) {
  map[pokedex[i]] = i + 1
}

for (let i = 0; i < M; i++) {
  const quiz = input[N + i + 1]
  if (map[quiz]) {
    ans.push(map[quiz])
  } else {
    ans.push(pokedex[Number(quiz) - 1])
  }
}

console.log(ans.join('\n'))
