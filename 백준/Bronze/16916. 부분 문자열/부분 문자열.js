const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const S = input[0]
const P = input[1]

const failure = new Array(P.length).fill(0)

let j = 0
for (let i = 1; i < P.length; i++) {
  while (j > 0 && P[i] !== P[j]) {
    j = failure[j - 1]
  }
  if (P[i] === P[j]) {
    j++
  }
  failure[i] = j
}

let n = 0
let m = 0
while (n < S.length) {
  if (S[n] === P[m]) {
    n++
    m++
    if (m === P.length) {
      break
    }
  } else if (m === 0) {
    n++
  } else {
    m = failure[m - 1]
  }
}

console.log(m === P.length ? 1 : 0)
