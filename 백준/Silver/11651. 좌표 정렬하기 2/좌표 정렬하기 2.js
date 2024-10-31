const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

list = []
for (let i = 1; i < input.length; i++) {
  const coor = input[i].split(' ').map(Number)
  list.push(coor)
}

function sortCoor(coorList) {
  coorList.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  return coorList
}

const sortedList = sortCoor(list)
sortedList.forEach((coor) => console.log(coor.join(' ')))
