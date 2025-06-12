const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

let idx = 0
const T = Number(input[idx++])

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const dfs = (x, y, field, M, N) => {
  field[x][y] = 0

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]

    if (nx >= 0 && nx < M && ny >= 0 && ny < N && field[nx][ny] === 1) {
      dfs(nx, ny, field, M, N)
    }
  }
}

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(' ').map(Number)

  const field = Array(M)
    .fill()
    .map(() => Array(N).fill(0))

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(' ').map(Number)
    field[x][y] = 1
  }

  let wormCount = 0

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j] === 1) {
        dfs(i, j, field, M, N)
        wormCount++
      }
    }
  }

  console.log(wormCount)
}
