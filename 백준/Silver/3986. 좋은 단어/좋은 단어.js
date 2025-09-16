const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])

let count = 0

for (let i = 1; i <= N; i++) {
  const stack = []

  for (let j = 0; j < input[i].length; j++) {
    if (stack.length === 0) {
      stack.push(input[i][j])
    } else if (input[i][j] !== stack[stack.length - 1]) {
      stack.push(input[i][j])
    } else {
      stack.pop()
    }
  }
  if (stack.length === 0) {
    count++
  }
}

console.log(count)
