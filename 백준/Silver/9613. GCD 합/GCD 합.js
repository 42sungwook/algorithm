const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [t, ...testLines] = input

function getGCD(a, b) {
  if (Math.max(a, b) === b) {
    let temp = a
    a = b
    b = temp
  }

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }

  return a
}

for (let i = 0; i < t; i++) {
  const [n, ...testCase] = testLines[i].split(' ').map(Number)
  let sum = 0
  for (let j = 0; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const gcd = getGCD(testCase[j], testCase[k])
      sum += gcd
    }
  }
  console.log(sum)
}
