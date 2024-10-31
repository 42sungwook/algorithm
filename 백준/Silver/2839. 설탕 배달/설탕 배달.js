const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const N = Number(input)

let ans = -1
let five = Math.floor(N / 5)

while (five >= 0) {
  remain = N - five * 5

  if (remain % 3 === 0) {
    ans = five + remain / 3
    break
  }

  five--
}

console.log(ans)
