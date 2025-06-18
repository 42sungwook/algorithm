const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

function getCutWood(height) {
    let totalWood = 0;
    for (let tree of trees) {
        if (tree > height) {
            totalWood += tree - height;
        }
    }
    return totalWood;
}

let left = 0;
let right = Math.max(...trees);
let answer = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cutWood = getCutWood(mid);
    
    if (cutWood >= M) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);