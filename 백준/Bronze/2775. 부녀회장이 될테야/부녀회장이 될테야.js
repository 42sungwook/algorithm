const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const arr = input.split('\n').map(Number)
function getSum(k, n) {
    const dp = Array.from(Array(k+1), () => Array(n+1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }
    
    for (let floor = 1; floor <= k; floor++) {
        for (let room = 1; room <= n; room++) {
            dp[floor][room] = dp[floor][room-1] + dp[floor-1][room];
        }
    }
    
    return dp[k][n];
}

for (let i = 0; i < arr[0]; i ++) {
  const sum = getSum(arr[i * 2 + 1], arr[i * 2 + 2])
  console.log(sum)
}
