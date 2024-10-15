const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const numbers = input.split('\n').slice(1).map(Number)

function countingSort(arr, min, max) {
  const count = new Array(max - min + 1).fill(0)

  for (let num of arr) {
    count[num - min]++
  }
  const result = []
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      result.push(i + min)
    }
  }
  return result
}

const min = Math.min(...numbers)
const max = Math.max(...numbers)

const sortedNumbers = countingSort(numbers, min, max)

console.log(sortedNumbers.join('\n'))
