const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const [M, N] = input

function checkPrime(num) {
  if (num === 1) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }
  const len = Math.sqrt(num)

  for (let i = 3; i <= len; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

for (let i = M; i <= N; i++) {
  if (checkPrime(i)) {
    console.log(i)
  }
}
