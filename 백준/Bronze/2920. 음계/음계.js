const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const len = input.length
let ascending = true;
let descending = true;

for (let i = 1; i < len; i++) {
    if (input[i] < input[i - 1]) ascending = false;
    if (input[i] > input[i - 1]) descending = false;

    if (!ascending && !descending) {
        console.log('mixed');
        return;
    }
}

if (ascending) console.log('ascending');
if (descending) console.log('descending');