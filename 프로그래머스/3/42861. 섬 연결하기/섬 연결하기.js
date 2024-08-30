

function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    
    let parent = Array.from({length: n}, (_, i) => i);
    
    function find(x) {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }

    function join(x, y) {
        x = find(x);
        y = find(y);
        if (x < y) parent[y] = x;
        else parent[x] = y;
    }
    
    let totalCost = 0;
    let edgeCount = 0;
    
    
    for (let [a, b, cost] of costs) {
        if (find(a) !== find(b)) {
            join(a, b);
            totalCost += cost;
            edgeCount++;
        }
        
        if (edgeCount === n - 1) break;
    }
    
    return totalCost;
}