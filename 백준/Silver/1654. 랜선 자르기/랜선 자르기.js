const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [K, N] = input[0].split(' ').map(Number);
const array = input.slice(1, input.length).map(Number);

let left = 1;
let right = Math.max(...array);
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;
  
  for (let i = 0; i < K; i++) {
    count += Math.floor(array[i] / mid);
  }
  
  if (count >= N) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);