const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const grade = Number(input);

switch(true){
    case(90 <= grade && grade <= 100):
        console.log('A');
        break;
    case(80 <= grade && grade < 90):
        console.log('B');
        break;
    case(70 <= grade && grade < 80):
        console.log('C');
        break;
    case(60 <= grade && grade < 70):
        console.log('D');
        break;
    default:
        console.log('F');
}