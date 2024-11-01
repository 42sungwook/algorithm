const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function checkBalance(string) {
  const stack = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[') {
      stack.push(string[i])
    }
    if (string[i] === ')') {
      const top = stack[stack.length - 1]
      if (top !== '(') {
        return false
      }
      stack.pop()
    }
    if (string[i] === ']') {
      const top = stack[stack.length - 1]
      if (top !== '[') {
        return false
      }
      stack.pop()
    }
    if (string[i] === '.') {
      break
    }
  }
  if (stack.length) {
    return false
  }
  return true
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === '.') {
    break
  }
  const isBalance = checkBalance(input[i]) ? 'yes' : 'no'
  console.log(isBalance)
}
