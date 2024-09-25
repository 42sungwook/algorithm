const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const arr = Array(26).fill(-1);
const len = input.length;
for (let i = 0; i < len; i++) {
    index = input.charCodeAt(i) - 97;
    if (arr[index] === -1) {
        arr[index] = i;
    }
}
console.log(arr.join(' '));