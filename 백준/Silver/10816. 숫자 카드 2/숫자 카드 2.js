const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[1].split(' ').map(Number)
const M = input[3].split(' ').map(Number)

const map = {}
const ans = []

for (let i = 0; i < N.length; i++) {
  if (map[N[i]]) {
    map[N[i]]++
  } else {
    map[N[i]] = 1
  }
}

for (let i = 0; i < M.length; i++) {
  if (map[M[i]]) {
    ans.push(map[M[i]])
  } else {
    ans.push(0)
  }
}

console.log(ans.join(' '))
