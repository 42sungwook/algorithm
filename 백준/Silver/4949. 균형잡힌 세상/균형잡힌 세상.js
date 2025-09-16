const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const answer = []

for (let i = 0; i < input.length; i++) {
  const stack = []
  let j = 0
  let balanced = true

  if (input[i][0] === '.') {
    break
  }

  while (input[i][j] !== undefined && input[i][j] !== '.') {
    switch (input[i][j]) {
      case '(':
      case '[':
        stack.push(input[i][j])
        break
      case ')':
        if (stack.pop() !== '(') {
          balanced = false
        }
        break
      case ']':
        if (stack.pop() !== '[') {
          balanced = false
        }
        break
      default:
        break
    }

    if (balanced === false) {
      break
    }
    j++
  }

  if (stack.length === 0 && balanced === true) {
    answer.push('yes')
  } else {
    answer.push('no')
  }
}

console.log(answer.join('\n'))
