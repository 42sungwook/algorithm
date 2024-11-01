const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const stack = []
let sum = 0

for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    stack.pop()
  } else {
    stack.push(input[i])
  }
}
if (stack.length) {
  sum = stack.reduce((a, b) => a + b)
}
console.log(sum)
