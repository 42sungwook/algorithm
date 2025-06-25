const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

const visited = new Array(n + 1).fill(false);
let count = 0;

function dfs(node) {
    visited[node] = true;
    for (const next of graph[node]) {
        if (!visited[next]) {
            dfs(next);
        }
    }
}

for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}

console.log(count);