const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

function findRoom(N) {
    if (N === 1) return 1;
    
    let room = 1;
    let sum = 1;
    
    while (sum < N) {
        sum += 6 * room;
        room++;
    }
    
    return room;
}

console.log(findRoom(N));