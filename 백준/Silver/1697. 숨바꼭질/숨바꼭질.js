const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number);

function solution(n, k) {
    if (n === k) return 0;
    
    const queue = [n];
    const visited = new Array(100001).fill(false);
    const time = new Array(100001).fill(0);
    
    visited[n] = true;
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        const moves = [current - 1, current + 1, current * 2];
        
        for (const next of moves) {
            if (next < 0 || next > 100000 || visited[next]) {
                continue;
            }
            
            if (next === k) {
                return time[current] + 1;
            }
            
            visited[next] = true;
            time[next] = time[current] + 1;
            queue.push(next);
        }
    }
    return -1;
}

console.log(solution(n, k));