const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const group = []

for (let i = 1; i < input.length; i++) {
  const person = input[i].split(' ').map(Number)
  group.push(person)
}

function getRank(array) {
  const rankArr = []
  for (let i = 0; i < array.length; i++) {
    let rank = 1
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i][0] < array[j][0] && array[i][1] < array[j][1]) {
        rank++
      }
    }
    rankArr.push(rank)
  }
  return rankArr
}

const answer = getRank(group)
console.log(answer.join(' '))
