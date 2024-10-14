const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const [A, B, C] = input.split('\n').map(Number)

function getNext(A, B, C) {
  if (!isNaN(A)) {
    return A + 3
  }
  if (!isNaN(B)) {
    return B + 2
  }
  if (!isNaN(C)) {
    return C + 1
  }
}

function FB(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'FizzBuzz'
  }
  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  return num.toString()
}

const result = FB(getNext(A, B, C))
console.log(result)
