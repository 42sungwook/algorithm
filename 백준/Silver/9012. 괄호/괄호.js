const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function checkBalance(string) {
  const stack = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(string[i])
    }
    if (string[i] === ')') {
      const top = stack[stack.length - 1]
      if (top !== '(') {
        return false
      }
      stack.pop()
    }
  }
  if (stack.length) {
    return false
  }
  return true
}

for (let i = 1; i < input.length; i++) {
  const isBalance = checkBalance(input[i]) ? 'YES' : 'NO'
  console.log(isBalance)
}
