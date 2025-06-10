const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const array = input[1].split(' ').map(Number)

const prefixSum = [0]
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + array[i]
}

for (let k = 0; k < M; k++) {
  const [i, j] = input[2 + k].split(' ').map(Number)
  console.log(prefixSum[j] - prefixSum[i - 1])
}