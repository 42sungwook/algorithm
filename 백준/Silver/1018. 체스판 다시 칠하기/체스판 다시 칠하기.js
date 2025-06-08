const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [firstLine, ...restLine] = input
const [M, N] = firstLine.split(' ').map(Number)
const board = restLine.map((line) => line.split(''))

let count = 0
let ans = Number.MAX_VALUE

for (x = 0; x <= M - 8; x++) {
  for (y = 0; y <= N - 8; y++) {
    count = 0
    for (i = 0; i < 8; i++) {
      for (j = 0; j < 8; j++) {
        if ((i + j) % 2 === 1 && board[x + i][y + j] === 'W') {
          count++
        }
        if ((i + j) % 2 === 0 && board[x + i][y + j] === 'B') {
          count++
        }
      }
    }
    numberToPaint = Math.abs(count - 64)
    leastNumberToPaint = count < numberToPaint ? count : numberToPaint
    if (leastNumberToPaint < ans) {
      ans = leastNumberToPaint
    }
  }
}

if (ans === Number.MAX_VALUE) {
  return
}

console.log(ans)
