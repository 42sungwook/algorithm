const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [firstLine, ...lines] = input

const [N, M] = firstLine.split(' ').map(Number)

const map = {}
for (let i = 0; i < N; i++) {
  const [site, password] = lines[i].split(' ')
  map[site] = password
}

for (let j = 0; j < M; j++) {
  console.log(map[lines[N + j]])
}
