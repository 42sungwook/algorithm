const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input[0]);
const pairs = input.slice(2).map(line => line.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
for (const [a, b] of pairs) {
    graph[a].push(b);
    graph[b].push(a);
}

function countInfected() {
    const visited = new Array(N + 1).fill(false);
    let count = 0;
    
    function dfs(node) {
        visited[node] = true;
        count++;
        
        for (const next of graph[node]) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }
    
    dfs(1);
    return count - 1;
}

console.log(countInfected());