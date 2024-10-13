const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

function findM() {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let temp = arr[i] + arr[j] + arr[k]
        if (temp > sum && temp <= M) {
          sum = temp
        }
        if (sum === M) {
          return sum
        }
      }
    }
  }
  return sum
}

console.log(findM())
