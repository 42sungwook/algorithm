const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

let answer = 0

const Array = input[1].split(' ').map(Number)

for (let i = 0; i < N; i++) {
  let sum = Array[i]
  if (sum === M) {
    answer++
    continue
  }
  for (let j = i + 1; j < N; j++) {
    sum += Array[j]
    if (sum === M) {
      answer++
      break
    }
    if (sum > M) {
      break
    }
  }
}

console.log(answer)
