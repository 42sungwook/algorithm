const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const inputNum = Number(input);

function findConstructor(num){
    for (let i = 1; i < num; i++){
        if (getSum(i) === num){
            return i;
        }
    }
    return 0;
}

function getSum(num){
    return num + num.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
}

console.log(findConstructor(inputNum));