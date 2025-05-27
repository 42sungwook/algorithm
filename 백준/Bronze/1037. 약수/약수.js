const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [len, divisorLine] = input

const divisorArray = divisorLine.split(' ').map(Number)

divisorArray.sort((a, b) => a - b)

if (len % 2 === 1) {
  const middleIndex = Math.floor(len / 2)
  console.log(Math.pow(divisorArray[middleIndex], 2))
  return
}

console.log(divisorArray[len - 1] * divisorArray[0])
