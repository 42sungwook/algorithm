const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for(let i = 1; i < 10; i++){
    const row = String(N) + ' * ' + String(i) + ' = ' + String(N * i);
    console.log(row); 
}