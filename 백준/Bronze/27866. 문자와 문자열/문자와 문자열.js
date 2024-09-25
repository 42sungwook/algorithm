const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [word, i] = input;
console.log(word[i - 1]);