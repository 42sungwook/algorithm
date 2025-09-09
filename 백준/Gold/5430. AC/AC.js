const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const T = Number(input[0])

const ans = []

for (let i = 0; i < T; i++) {
  let idx = 1 + i * 3

  const p = input[idx].split('')
  const arrString = input[idx + 2]

  const arr =
    arrString === '[]'
      ? []
      : arrString.slice(1, arrString.length - 1).split(',')

  let isError = false
  let reverse = false

  for (const order of p) {
    switch (order) {
      case 'R':
        reverse = !reverse
        break
      case 'D':
        if (arr.length === 0) {
          isError = true
          break
        }

        if (reverse) {
          arr.pop()
        } else {
          arr.shift()
        }
        break
    }
    if (isError) break
  }

  if (!isError && reverse) {
    arr.reverse()
  }
  ans.push(isError ? 'error' : `[${arr.join(',')}]`)
}

console.log(ans.join('\n'))
