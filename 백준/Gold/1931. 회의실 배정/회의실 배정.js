const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [firstLine, ...otherLines] = input

const N = Number(firstLine)

const meetings = otherLines.map((lines) => lines.split(' ').map(Number))

meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  }
  return a[1] - b[1]
})

let count = 0
let lastEndTime = 0

for (let i = 0; i < N; i++) {
	const [start, end] = meetings[i]

	if (start >= lastEndTime) {
		count++
		lastEndTime = end
	}
}

console.log(count)